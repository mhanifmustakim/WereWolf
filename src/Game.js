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
    console.log(playerIds);
    playerIds.forEach((id) => {
      const player = getPlayerById(id);
      console.log(player);
      player.die();
      names.push(player.name);

      if ("onKillNight" in player.role) {
        const result = player.role.onKillNight();
        if ("kill" in result) {
          const additionalPlayer = getPlayerById(result["kill"]);
          additionalPlayer.die();
          names.push(additionalPlayer.name);
        } else if ("save" in result) {
          const target = getPlayerById(result["save"]);
          target.revive();
          const playerIndex = names.findIndex((name) => name === target.name);
          names.splice(playerIndex, 1);
        }
      }
    });

    View.resolveNight(names);
  };

  const checkGameEnd = () => {
    const wwCount = count("werewolf");
    const humanCount = count("human");
    const skAlive =
      players.filter(
        (player) => player.isAlive && player.role.name === "serial killer"
      ).length > 0;
    const aliveCount = players.filter((player) => player.isAlive).length;
    if (skAlive && aliveCount > 1) return;

    if (skAlive && aliveCount == 1) {
      isGameOver = true;
      winner = "Serial Killer";
    } else if (wwCount >= humanCount) {
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

  const finishNight = () => {
    const attacked = new Set();
    const revealed = new Set();
    const guarded = new Set();
    Object.entries(nightEvents).forEach(([role, event]) => {
      if ("attack" in event) {
        if ("onContact" in getPlayerById(event.attack).role) {
          const resolution = getPlayerById(event.attack).role.onContact(role);
          if ("kill" in resolution) {
            console.log(resolution);
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
          console.log(resolution);
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
        if (nightEvents.bodyguard.guard === id) {
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
    finishNight,
    getPlayerById,
  };
})();

export default Game;
