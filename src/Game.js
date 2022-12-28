import RoleView from "./RoleView";
import View from "./View";

const Game = (function () {
  let players = [];
  let isGameOver = true;
  let dayCount = 0;
  let winner = null;
  let nightEvents = {};
  let prevRoles = null;

  const addPlayer = (player) => {
    players.push(player);
  };

  const setRoles = (roleQuantities) => {
    let unsetPlayers = [...players];
    Object.entries(roleQuantities).forEach((entry) => {
      const role = entry[0];
      const quantity = parseInt(entry[1]);
      for (let i = 0; i < quantity; i++) {
        const index = Math.floor(Math.random() * unsetPlayers.length);
        const randomPlayer = unsetPlayers.splice(index, 1)[0];
        randomPlayer.setRole(role);
      }
    });

    prevRoles = roleQuantities;
  };

  const count = (type) => {
    let total = 0;
    players.forEach((player) => {
      if (player.isAlive && player.role.type === type) {
        total += 1;
      }
    });
    return total;
  };

  const reset = () => {
    for (let i = 0; i < players.length; i++) {
      players[i].reset();
    }
  };

  const start = () => {
    isGameOver = false;
    dayCount = 0;
    winner = null;
    View.revealRoles(players);
  };

  const startDay = () => {
    dayCount += 1;
    checkGameEnd();

    if (!isGameOver) View.renderDay(dayCount);
  };

  const startNight = () => {
    checkGameEnd();
    if (isGameOver) return;

    const nightRoles = new Set();
    players.forEach((player) => {
      if (
        player.role.availableActions &&
        !nightRoles.has(player.role.name) &&
        player.isAlive
      ) {
        nightRoles.add(player.role.name);
      }
    });

    RoleView.render(Array.from(nightRoles));
  };

  const voteOut = (playerId) => {
    players.forEach((player) => {
      if (player.id === playerId) {
        player.die();
        console.log(`${player.name} is dead!`);
      }
    });
  };

  const killAtNight = (playerIds) => {
    const names = [];
    playerIds.forEach((id) => {
      const player = getPlayerById(id);
      player.die();

      if ("onKillNight" in player.role) {
        const result = player.role.onKillNight();
        if ("kill" in result) {
          const additionalPlayer = getPlayerById(result["kill"]);
          additionalPlayer.die();
          names.push(additionalPlayer.name);
        }
      }

      names.push(player.name);
    });

    View.resolveNight(names);
  };

  const checkGameEnd = () => {
    const wwCount = count("werewolf");
    const humanCount = count("human");

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
    const player = getPlayerById(playerId);
    nightEvents[savior] = {
      guard: playerId,
    };
  };

  const finishNight = () => {
    const attacked = new Set();
    const revealed = new Set();
    const guarded = new Set();
    Object.values(nightEvents).forEach((event) => {
      if ("attack" in event) {
        attacked.add(event.attack);
      }

      if ("reveal" in event) {
        revealed.add(event.reveal);
      }

      if ("guard" in event) {
        guarded.add(event.guard);
      }
    });

    const killed = new Set(
      Array.from(attacked).filter((id) => !guarded.has(id))
    );
    killAtNight(Array.from(killed));
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
    finishNight,
    getPlayerById,
  };
})();

export default Game;
