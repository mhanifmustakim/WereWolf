import Game from "./Game";

const Roles = {
  werewolf: function () {
    const name = "werewolf";
    const type = "werewolf";
    const team = "Werewolves";
    const availableActions = ["kill"];
    const action = {
      kill: function (playerId) {
        Game.attack("werewolf", playerId);
      },
    };

    return {
      get name() {
        return name;
      },
      get type() {
        return type;
      },
      get availableActions() {
        return availableActions;
      },
      get action() {
        return action;
      },
      get team() {
        return team;
      },
    };
  },

  citizen: function () {
    const name = "citizen";
    const type = "human";
    const team = "Citizens";
    const availableActions = null;

    return {
      get name() {
        return name;
      },
      get type() {
        return type;
      },
      get availableActions() {
        return availableActions;
      },
      get team() {
        return team;
      },
    };
  },

  seer: function () {
    const name = "seer";
    const type = "human";
    const team = "Citizens";
    const availableActions = ["reveal"];
    const action = {
      reveal: function (playerId) {
        Game.reveal("seer", playerId);
        return Game.getPlayerById(playerId).role.name;
      },
    };

    return {
      get name() {
        return name;
      },
      get type() {
        return type;
      },
      get availableActions() {
        return availableActions;
      },
      get action() {
        return action;
      },
      get team() {
        return team;
      },
    };
  },

  doctor: function () {
    const name = "doctor";
    const type = "human";
    const team = "Citizens";
    const availableActions = ["heal"];
    const action = {
      heal: function (playerId) {
        Game.guard("doctor", playerId);
      },
    };

    return {
      get name() {
        return name;
      },
      get type() {
        return type;
      },
      get availableActions() {
        return availableActions;
      },
      get action() {
        return action;
      },
      get team() {
        return team;
      },
    };
  },

  lover: function () {
    const name = "lover";
    const type = "human";
    const team = "Citizens";
    const availableActions = null;
    const onSet = () => {
      const lovers = [];
      const element = document.createElement("h4");
      Game.players.forEach((player) => {
        if (player.role.name === "lover") {
          lovers.push(player.name);
        }
      });
      element.innerHTML = `The lovers are <br>${lovers.join(" & ")}`;
      return element;
    };

    const onKillNight = () => {
      const resolve = {};
      Game.players.forEach((player) => {
        if (player.role.name === "lover" && player.isAlive) {
          resolve["kill"] = player.id;
        }
      });
      return resolve;
    };

    return {
      get name() {
        return name;
      },
      get type() {
        return type;
      },
      get availableActions() {
        return availableActions;
      },
      get team() {
        return team;
      },
      onSet,
      onKillNight,
    };
  },
  psycho: function () {
    const name = "psycho";
    const type = "human";
    const team = "Werewolves";
    const availableActions = null;

    return {
      get name() {
        return name;
      },
      get type() {
        return type;
      },
      get availableActions() {
        return availableActions;
      },
      get team() {
        return team;
      },
    };
  },

  bodyguard: function () {
    const name = "bodyguard";
    const type = "human";
    const team = "Citizens";
    const availableActions = ["guard"];
    let powerUsed = false;

    const usedPower = () => {
      powerUsed = true;
    };

    const action = {
      guard: function (playerId) {
        const bodyguardPlayer = Game.players.filter(
          (player) => player.role.name === "bodyguard"
        )[0];

        if (!bodyguardPlayer.role.powerUsed) {
          Game.guard("bodyguard", playerId);
        }
      },
    };

    const onKillNight = () => {
      const resolve = {};
      const bodyguardPlayer = Game.players.filter(
        (player) => player.role.name === "bodyguard"
      )[0];

      if (!bodyguardPlayer.role.powerUsed) {
        bodyguardPlayer.role.usedPower();
        resolve["save"] = bodyguardPlayer.id;
      }
      return resolve;
    };

    return {
      get name() {
        return name;
      },
      get type() {
        return type;
      },
      get availableActions() {
        return availableActions;
      },
      get team() {
        return team;
      },
      get powerUsed() {
        return powerUsed;
      },
      action,
      onKillNight,
      usedPower,
    };
  },

  serialKiller: function () {
    const name = "serial killer";
    const type = "human";
    const team = "Serial Killer";
    const availableActions = null;

    const onContact = (contactPerson) => {
      const resolve = {};
      const contactedPlayers = Game.players.filter(
        (player) => player.role.name === contactPerson
      );
      const randomIndex = Math.floor(Math.random() * contactedPlayers.length);
      const randomTarget = contactedPlayers[randomIndex].id;
      resolve["kill"] = randomTarget;

      return resolve;
    };

    return {
      get name() {
        return name;
      },
      get type() {
        return type;
      },
      get availableActions() {
        return availableActions;
      },
      get team() {
        return team;
      },
      onContact,
    };
  },

  assassin: function () {
    const name = "assassin";
    const type = "human";
    const team = "Citizens";
    const availableActions = ["kill"];
    let powerUsed = false;

    const usedPower = () => {
      powerUsed = true;
    };

    const action = {
      kill: function (playerId) {
        const assassinPlayer = Game.players.filter(
          (player) => player.isAlive && player.role.name === "assassin"
        )[0];
        if (!assassinPlayer.role.powerUsed) {
          Game.attack("assassin", playerId);
          Game.players
            .filter(
              (player) => player.isAlive && player.role.name === "assassin"
            )[0]
            .role.usedPower();
        }
      },
    };

    return {
      get name() {
        return name;
      },
      get type() {
        return type;
      },
      get availableActions() {
        return availableActions;
      },
      get action() {
        return action;
      },
      get team() {
        return team;
      },
      get powerUsed() {
        return powerUsed;
      },
      usedPower,
    };
  },
};

export default Roles;
