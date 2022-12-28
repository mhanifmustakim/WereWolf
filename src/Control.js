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
    const currentPlayer = players[current];
    playerView.textContent = "You are a " + currentPlayer.role.name + "!";
    if ("onSet" in currentPlayer.role) {
      playerView.appendChild(currentPlayer.role.onSet());
      playerView.classList.add("flex-column");
    }
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
