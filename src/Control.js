import Roles from "./Roles";

const Control = (function () {
  const addPlayer = (e) => {
    e.preventDefault();
    const data = document.querySelector("#player-name").value;
    PubSub.publish("PlayerAdded", data);
    document.querySelector("#player-name").value = "";
  };

  const startGame = (e) => {
    e.preventDefault();
    const data = {};
    Object.keys(Roles).forEach((roleName) => {
      data[roleName] = parseInt(
        document.querySelector(`#role-${roleName}`).value
      );
    });

    PubSub.publish("StartGame", data);
  };

  const revealPlayer = (players, current) => {
    const playerView = document.querySelector("#player-view");
    playerView.textContent = "You are a " + players[current].role.name + "!";
    playerView.removeEventListener("click", revealPlayer);
  };

  const voteOut = (e) => {
    e.preventDefault();
    const data = e.target.getAttribute("data-id");
    PubSub.publish("Voted", parseInt(data));
  };

  const startNewGame = (e) => {
    PubSub.publish("Reset", null);
  };
  return {
    addPlayer,
    voteOut,
    startNewGame,
    startGame,
    revealPlayer,
  };
})();

export default Control;
