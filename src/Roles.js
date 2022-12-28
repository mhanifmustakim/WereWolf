import Game from "./Game";

const Roles = {
  werewolf: function () {
    const name = "werewolf";
    const type = "werewolf";
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
    };
  },

  citizen: function () {
    const name = "citizen";
    const type = "human";
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
    };
  },

  seer: function () {
    const name = "seer";
    const type = "human";
    const availableActions = ["reveal"];
    const action = {
      reveal: function (playerId) {
        Game.reveal("seer", playerId);
        return Game.getPlayerById(playerId).role.type;
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
    };
  },
};

export default Roles;
