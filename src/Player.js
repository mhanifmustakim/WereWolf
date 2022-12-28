import Roles from "./Roles";

const Player = function (name) {
  const id = Player.getId();
  let isAlive = true;
  let role = null;
  let hasRevealed = false;

  const setRole = (roleName) => {
    role = Roles[roleName]();
  };

  const reveal = () => {
    hasRevealed = true;
  };

  const revive = () => {
    isAlive = true;
  };

  const reset = () => {
    role = null;
    isAlive = true;
    hasRevealed = false;
  };

  const die = () => {
    isAlive = false;
  };

  return {
    get name() {
      return name;
    },
    get id() {
      return id;
    },
    get role() {
      return role;
    },
    get isAlive() {
      return isAlive;
    },
    get hasRevealed() {
      return hasRevealed;
    },
    revive,
    die,
    setRole,
    reset,
    reveal,
  };
};

Player.nextId = 1;
Player.getId = function () {
  const current = Player.nextId;
  Player.nextId += 1;
  return current;
};

export default Player;
