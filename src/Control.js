import Roles from "./Roles";

const Control = (function () {
  const addPlayer = (e) => {
    e.preventDefault();
    // Adds the player name into register of players
    const data = document.querySelector("#player-name").value;
    PubSub.publish("PlayerAdded", data);
    document.querySelector("#player-name").value = "";
  };

  const startGame = (e) => {
    e.preventDefault();
    // Gets the Role Counts from Role Count Selection display
    const data = {};
    Object.keys(Roles).forEach((roleName) => {
      data[roleName] = parseInt(
        document.querySelector(`#role-${roleName}`).value
      );
    });

    // Sends the Role Counts for current Game
    PubSub.publish("StartGame", data);
  };

  const revealPlayer = (players, current) => {
    // Reveal Player role to player before 1st day starts
    const playerView = document.querySelector("#player-view");
    playerView.classList.add("flex-column");
    const currentPlayer = players[current];
    playerView.textContent = "You are a " + currentPlayer.role.name + "!\n";

    // Special features in Role.OnRevealAtStart
    if ("OnRevealAtStart" in currentPlayer.role) {
      playerView.appendChild(currentPlayer.role.OnRevealAtStart());
    }

    const description = document.createElement("p");
    description.innerHTML =
      "You belong to the " + currentPlayer.role.team + " team.<br>";
    description.innerHTML += currentPlayer.role.description;
    playerView.appendChild(description);

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
