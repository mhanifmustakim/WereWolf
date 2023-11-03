import RoleView from "./RoleView";
import View from "./View";

const Game = (function () {
  let players = [];
  let isGameOver = true;
  let dayCount = 0;
  let winner = null;
  let nightEvents = {};
  let prevRoles = null;
  let votedOut = [];

  const addPlayer = (player) => {
    players.push(player);
  };

  const shuffleArray = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  // Set Roles of the Players randomly based on role Quantities
  const setRoles = (roleQuantities) => {
    let unsetPlayers = shuffleArray([...players]);
    Object.entries(roleQuantities).forEach((entry) => {
      const role = entry[0];
      const quantity = parseInt(entry[1]);
      for (let i = 0; i < quantity; i++) {
        const index = Math.floor(Math.random() * unsetPlayers.length);
        const randomPlayer = unsetPlayers.splice(index, 1)[0];
        randomPlayer.setRole(role);
      }
    });

    // Handle special feature on Role.onRolesSet
    Game.players.forEach((player) => {
      if ("onRolesSet" in player.role) {
        player.role.onRolesSet();
      }
    });

    // Set default for possible next game
    prevRoles = roleQuantities;
  };

  // Count the number of players alive with role: type
  const count = (type) => {
    let total = 0;
    players.forEach((player) => {
      if (player.isAlive && player.role.type === type) {
        total += 1;
      }
    });
    return total;
  };

  // Reset all players data
  const reset = () => {
    for (let i = 0; i < players.length; i++) {
      players[i].reset();
    }
  };

  // Start a new Game
  const start = () => {
    isGameOver = false;
    dayCount = 0;
    winner = null;
    View.revealRoles(players);
    votedOut = [];
  };

  const startDay = () => {
    dayCount += 1;

    // Render day if not Game Over
    checkGameEnd();
    if (!isGameOver) View.renderDay(dayCount);
  };

  const startNight = () => {
    checkGameEnd();
    if (isGameOver) return; // Stop night actions if already Game Over

    const nightRoles = new Set();
    players.forEach((player) => {
      // Add every role that has a night action
      if (player.role.availableActions && !nightRoles.has(player.role.name)) {
        nightRoles.add(player.role.name);
      }
    });

    // Start rendering each night role
    RoleView.render(Array.from(nightRoles));
  };

  // Handle voting out of player
  const voteOut = (playerId) => {
    players.forEach((player) => {
      if (player.id === playerId) {
        player.die();
        votedOut.push(player.id);
      }
    });
  };

  // Handle mercenary target dying at night
  const checkMercenaryTarget = (id) => {
    const mercenary = Game.players.filter(
      (player) => player.isAlive && player.role.name === "mercenary"
    );

    if (mercenary.length > 0 && mercenary[0].role.target === id)
      mercenary[0].role.changeTeam("Citizens");
  };

  const killAtNight = (playerIds) => {
    const idsOfPlayersKilled = [];

    playerIds.forEach((id) => {
      const player = getPlayerById(id);
      idsOfPlayersKilled.push(id);

      // Resolve special features of Role.OnKillAtNight
      if ("OnKillAtNight" in player.role) {
        const result = player.role.OnKillAtNight(id);
        if ("kill" in result) {
          // Additional Player is also Killed
          const additionalPlayer = getPlayerById(result["kill"]);
          idsOfPlayersKilled.push(additionalPlayer.id);
        } else if ("save" in result) {
          // A player is saved from killed
          const target = getPlayerById(result["save"]);
          const playerIndex = idsOfPlayersKilled.findIndex(
            (id) => id === target.id
          );
          idsOfPlayersKilled.splice(playerIndex, 1);
        }
      }
    });

    // Kill every player that is supposed to die
    idsOfPlayersKilled.forEach((id) => {
      const currentPlayer = getPlayerById(id);
      currentPlayer.die();
      checkMercenaryTarget(id); // Handle mercenary target dying at night
    });

    const namesOfPlayersKilled = idsOfPlayersKilled.map(
      (id) => getPlayerById(id).name
    );

    View.resolveNight(namesOfPlayersKilled);
  };

  const checkGameEnd = () => {
    const wwCount = count("werewolf");
    const humanCount = count("human");

    const mercenary = Game.players.filter(
      (player) => player.isAlive && player.role.team === "Mercenary"
    );
    if (
      votedOut.length > 0 &&
      mercenary.length > 0 &&
      votedOut.pop() === mercenary[0].role.target // Last Person Voted Out is the mercenary target
    ) {
      isGameOver = true;
      winner = "Mercenary";
      PubSub.publish("Game Over", { players, winner });
      return;
    }

    if (wwCount >= humanCount) {
      isGameOver = true;
      winner = "Werewolves";
    } else if (wwCount === 0) {
      isGameOver = true;
      winner = "Citizens";
    }

    if (isGameOver) {
      PubSub.publish("GameOver", { players, winner });
    }
  };

  const getPlayerById = (id) => {
    return players.filter((player) => player.id === id)[0];
  };

  const attack = (attacker, victimId) => {
    nightEvents[attacker] = {
      attack: victimId,
    };
  };

  const reveal = (revealer, playerId) => {
    const player = getPlayerById(playerId);
    player.reveal();
    nightEvents[revealer] = {
      reveal: playerId,
    };
  };

  const guard = (savior, playerId) => {
    nightEvents[savior] = {
      guard: playerId,
    };
  };

  const checkSimilar = (player1Id, player2Id) => {
    return (
      getPlayerById(player1Id).role.team === getPlayerById(player2Id).role.team
    );
  };

  const finishNight = () => {
    const attacked = new Set();
    const revealed = new Set();
    const guarded = new Set();
    Object.entries(nightEvents).forEach(([role, event]) => {
      if ("attack" in event) {
        // Handle Special Feature of Role.OnContact
        if ("onContact" in getPlayerById(event.attack).role) {
          const resolution = getPlayerById(event.attack).role.onContact(role);
          if ("kill" in resolution) {
            attacked.add(resolution["kill"]);
          }
        } else {
          attacked.add(event.attack);
        }
      }

      if ("reveal" in event) {
        revealed.add(event.reveal);
      }

      if ("guard" in event) {
        if ("onContact" in getPlayerById(event.guard).role) {
          const resolution = getPlayerById(event.guard).role.onContact(role);
          if ("kill" in resolution) {
            attacked.add(resolution["kill"]);
          }
        } else {
          guarded.add(event.guard);
        }
      }
    });

    const killed = [];
    const saved = [];
    Array.from(attacked).forEach((id) => {
      if (guarded.has(id)) {
        saved.push(id);
        if ("bodyguard" in nightEvents && nightEvents.bodyguard.guard === id) {
          const bodyguard = players.filter(
            (player) => player.isAlive && player.role.name == "bodyguard"
          )[0];
          bodyguard.role.usedPower();
        }
      } else {
        killed.push(id);
      }
    });

    killAtNight(killed);
    console.log(nightEvents);
    nightEvents = {};
  };

  return {
    get players() {
      return players;
    },
    get isGameOver() {
      return isGameOver;
    },
    get prevRoles() {
      return prevRoles;
    },
    addPlayer,
    setRoles,
    start,
    reset,
    startDay,
    startNight,
    voteOut,
    checkGameEnd,
    attack,
    reveal,
    guard,
    checkSimilar,
    finishNight,
    getPlayerById,
  };
})();

export default Game;
