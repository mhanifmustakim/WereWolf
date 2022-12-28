import Game from "./Game";

const Roles = {
  werewolf: function () {
    const name = "werewolf";
    const type = "werewolf";
    const team = "Werewolves";
    const availableActions = ["kill"];
    const action = {
      kill: function (playerId) {
        Game.attack("Werewolves", playerId);
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
      get action() {
        return action;
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
};

export default Roles;
