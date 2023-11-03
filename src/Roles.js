import Game from "./Game";

const createRole = ({ name, type, team, availableActions, description }) => {
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
    get description() {
      return description;
    },
    set team(newTeam) {
      team = newTeam;
    },
  };
};

const Roles = {
  werewolf: function () {
    const self = createRole({
      name: "werewolf",
      team: "Werewolves",
      type: "werewolf",
      availableActions: ["kill"],
      description:
        "The werewolves can choose one person to attack every night.",
    });

    self.action = {
      kill: function (playerId) {
        Game.attack("werewolf", playerId);
      },
    };

    self.OnRevealAtStart = () => {
      const werewolves = [];
      const element = document.createElement("h4");
      Game.players.forEach((player) => {
        if (player.role.name === "werewolf") {
          werewolves.push(player.name);
        }
      });
      if (werewolves.length > 1)
        element.innerHTML = `The werewolves are <br>${werewolves.join(", ")}`;
      return element;
    };

    return self;
  },

  citizen: function () {
    return createRole({
      name: "citizen",
      type: "human",
      team: "Citizens",
      availableActions: null,
      description: "You are a normal citizen with no special abilities.",
    });
  },

  seer: function () {
    const self = createRole({
      name: "seer",
      type: "human",
      team: "Citizens",
      availableActions: ["reveal"],
      description: "You can reveal the role of a player you choose at night.",
    });

    self.targets = [...Game.players];
    self.action = {
      reveal: function (playerId) {
        Game.reveal("seer", playerId);
        return Game.getPlayerById(playerId).role.name;
      },
    };

    return self;
  },

  doctor: function () {
    const self = createRole({
      name: "doctor",
      type: "human",
      team: "Citizens",
      availableActions: ["heal"],
      description:
        "You can choose one player to heal at night.\n" +
        "The player will not die if he is attacked.",
    });

    self.action = {
      heal: function (playerId) {
        Game.guard("doctor", playerId);
      },
    };

    return self;
  },

  lover: function () {
    const self = createRole({
      name: "lover",
      type: "human",
      team: "Citizens",
      availableActions: null,
      description:
        "If your lover is killed at night, you also die out of sadness.\n" +
        '"You Die I Die"',
    });

    self.OnRevealAtStart = () => {
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

    self.OnKillAtNight = (id) => {
      const resolve = {};
      Game.players.forEach((player) => {
        if (player.role.name === "lover" && player.isAlive && player.id != id) {
          resolve["kill"] = player.id;
        }
      });
      return resolve;
    };

    return self;
  },

  psycho: function () {
    const self = createRole({
      name: "psycho",
      type: "human",
      team: "Werewolves",
      availableActions: null,
      description:
        "You are a normal human that belongs to the Werewolves team.",
    });

    return self;
  },

  bodyguard: function () {
    const self = createRole({
      name: "bodyguard",
      type: "human",
      team: "Citizens",
      availableActions: ["guard"],
      description:
        "You can withstand one attack. You can choose to protect others when you are still strong.",
    });

    self.powerUsed = false;

    self.usedPower = () => {
      self.powerUsed = true;
    };

    self.action = {
      guard: function (playerId) {
        const bodyguardPlayer = Game.players.filter(
          (player) => player.role.name === "bodyguard"
        )[0];

        if (!bodyguardPlayer.role.powerUsed) {
          Game.guard("bodyguard", playerId);
        }
      },
    };

    self.OnKillAtNight = (id) => {
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

    return self;
  },

  serialKiller: function () {
    const self = createRole({
      name: "serial killer",
      type: "human",
      team: "Werewolf",
      availableActions: null,
      description:
        "Any player that contacts you in the night will be killed.\n" +
        "You belong to the Werewolves team.",
    });

    self.onContact = (contactPerson) => {
      const resolve = {};
      const contactedPlayers = Game.players.filter(
        (player) => player.role.name === contactPerson
      );
      const randomIndex = Math.floor(Math.random() * contactedPlayers.length);
      const randomTarget = contactedPlayers[randomIndex].id;
      resolve["kill"] = randomTarget;

      return resolve;
    };

    return self;
  },

  assassin: function () {
    const self = createRole({
      name: "assassin",
      type: "human",
      team: "Citizens",
      availableActions: ["kill"],
      description: "You can kill 1 player at night throughout the game.",
    });

    self.powerUsed = false;

    self.usedPower = () => {
      self.powerUsed = true;
    };

    self.action = {
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

    return self;
  },

  mercenary: function () {
    const self = createRole({
      name: "mercenary",
      type: "human",
      team: "Mercenary",
      availableActions: null,
      description:
        "You will receive a target. You must persuade others to vote out the player.",
    });

    self.target = null;

    self.changeTeam = (newTeam) => {
      self.team = newTeam;
    };

    self.setTarget = (id) => {
      self.target = id;
    };

    self.onRolesSet = () => {
      const possibleTargets = Game.players.filter(
        (player) => player.role.team === "Citizens"
      );
      const randomIndex = Math.floor(Math.random() * possibleTargets.length);
      const targetPlayer = possibleTargets[randomIndex];
      const mercenaryPlayer = Game.players.filter(
        (player) => player.role.name === "mercenary"
      )[0];
      mercenaryPlayer.role.setTarget(targetPlayer.id);
    };

    self.OnRevealAtStart = () => {
      const element = document.createElement("h4");
      const targetId = Game.players.filter(
        (player) => player.role.name === "mercenary"
      )[0].role.target;
      element.innerHTML = `Your target is ${Game.getPlayerById(targetId).name}`;
      return element;
    };

    return self;
  },

  detective: function () {
    const self = createRole({
      name: "detective",
      type: "human",
      team: "Citizens",
      availableActions: ["choose"],
      description:
        "You can choose 2 players at night.\n" +
        "You can check if both players are from the same team.",
    });

    self.action = {
      choose: function (player1Id, player2Id) {
        return Game.checkSimilar(player1Id, player2Id);
      },
    };

    return self;
  },

  witch: function () {
    const self = createRole({
      name: "witch",
      type: "human",
      team: "Citizens",
      availableActions: ["reveal"],
      description:
        "You can reveal the role of a dead player you choose at night.",
    });

    self.action = {
      reveal: function (playerId) {
        return Game.getPlayerById(playerId).role.type;
      },
    };

    return self;
  },
};

export default Roles;
