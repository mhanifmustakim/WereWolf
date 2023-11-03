import Control from "./Control";
import Game from "./Game";
import Roles from "./Roles";
import { toOrdinal } from "number-to-words";

const View = (function () {
  const main = document.querySelector("#main");
  const titleView = () => {
    const title = document.createElement("div");
    const mainTitle = document.createElement("h1");
    const secondary = document.createElement("h3");
    mainTitle.textContent = "Werewolf Game";
    mainTitle.classList.add("text-xl");
    secondary.textContent =
      "Unleash your inner predator in this thrilling werewolf game. Can you outsmart your opponents and emerge victorious?";
    title.classList.add("main-title");

    title.appendChild(mainTitle);
    title.appendChild(secondary);
    title.classList.add("text-center");
    title.classList.add("scary-text");
    title.id = "main-title";
    return title;
  };

  const addPlayerForm = () => {
    const form = document.createElement("form");

    const input = document.createElement("input");
    input.id = "player-name";
    input.name = "player-name";
    input.required = true;
    input.autocomplete = "off";
    input.placeholder = "Add name here";
    const label = document.createElement("label");
    label.for = "player-name";
    label.textContent = "New Player Name: ";
    const addPlayerBtn = document.createElement("button");
    addPlayerBtn.textContent = "Add Player";
    addPlayerBtn.type = "submit";

    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(addPlayerBtn);

    form.addEventListener("submit", Control.addPlayer);

    return form;
  };

  const displayCurrentPlayers = (players) => {
    const list = document.querySelector("#players-list");
    list.innerHTML = "";
    players.forEach((player) => {
      if (!player.isAlive) return;
      const playerElement = document.createElement("li");
      playerElement.textContent = player.name;
      playerElement.setAttribute("data-id", player.id);
      list.appendChild(playerElement);
    });
  };

  const revealRoles = (players, current = 0) => {
    main.innerHTML = "";

    const playerView = document.createElement("h3");
    const navBtns = document.createElement("div");

    playerView.id = "player-view";
    playerView.classList.add("focus-view");
    playerView.textContent = "Calling for " + players[current].name;

    playerView.addEventListener(
      "click",
      Control.revealPlayer.bind(window, players, current)
    );

    main.appendChild(playerView);

    if (current !== 0) {
      const backBtn = document.createElement("button");
      backBtn.textContent = "Back";
      backBtn.addEventListener(
        "click",
        revealRoles.bind(window, players, current - 1)
      );
      navBtns.appendChild(backBtn);
    }

    const nextBtn = document.createElement("button");
    nextBtn.textContent = "Next Player";

    if (current === players.length - 1) {
      nextBtn.textContent = "Start Day";
      nextBtn.addEventListener("click", Game.startDay);
    } else {
      nextBtn.addEventListener(
        "click",
        revealRoles.bind(window, players, current + 1)
      );
    }

    navBtns.appendChild(nextBtn);
    main.appendChild(navBtns);
  };

  const renderChooseRoles = (Game) => {
    main.innerHTML = "";
    main.appendChild(titleView());

    let n = Game.players.length;
    const playerCount = document.createElement("header");
    playerCount.textContent = "Total Players: " + Game.players.length;

    const form = document.createElement("form");
    form.id = "chooseRoleForm";
    Object.keys(Roles).forEach((roleName) => {
      const formGroup = document.createElement("div");
      let quantity = 0;

      if (Game.prevRoles !== null) {
        quantity = Game.prevRoles[roleName];
      } else if (roleName === "werewolf") {
        quantity = 1;
      } else if (roleName === "citizen") {
        quantity = n - 1;
      }

      const roleLabel = document.createElement("label");
      roleLabel.textContent = roleName;
      roleLabel.for = `role-${roleName}`;
      const roleInput = document.createElement("input");
      roleInput.id = `role-${roleName}`;
      roleInput.name = `role-${roleName}`;
      roleInput.type = "number";
      roleInput.min = roleName == "werewolf" ? 1 : 0;
      roleInput.value = quantity;
      const separator = document.createElement("div");
      separator.textContent = " : ";

      formGroup.appendChild(roleLabel);
      formGroup.appendChild(separator);
      formGroup.appendChild(roleInput);
      formGroup.classList.add("role-input-group");

      form.appendChild(formGroup);
    });

    const buttons = document.createElement("div");
    buttons.classList.add("spaced-vertical");
    const startGameBtn = document.createElement("button");
    startGameBtn.textContent = "Start Game";
    startGameBtn.type = "submit";
    const backBtn = document.createElement("button");
    backBtn.textContent = "Back";
    backBtn.type = "button";
    backBtn.addEventListener("click", renderStart);

    buttons.appendChild(backBtn);
    buttons.appendChild(startGameBtn);
    form.appendChild(buttons);

    form.addEventListener("submit", Control.startGame);
    form.classList.add("flex-column");
    form.classList.add("spaced-vertical");

    main.appendChild(playerCount);
    main.appendChild(form);
  };

  const renderVotingScreen = () => {
    main.innerHTML = "";
    main.appendChild(titleView());

    const votePrompt = document.createElement("header");
    votePrompt.textContent =
      "It's time for the villagers to cast their votes and try to identify the werewolf among us. Who do you suspect is the werewolf? Think carefully and choose wisely.";

    const playersList = document.createElement("ul");
    playersList.classList.add("vote-list");
    playersList.classList.add("spaced-vertical");
    Game.players.forEach((player) => {
      const playerView = document.createElement("li");
      const name = document.createElement("p");
      name.textContent = player.name;

      playerView.appendChild(name);

      const voteBtn = document.createElement("button");
      voteBtn.textContent = "VOTE";
      voteBtn.setAttribute("data-id", player.id);
      if (!player.isAlive) voteBtn.disabled = true;
      voteBtn.addEventListener("click", Control.voteOut);

      playersList.appendChild(playerView);
      playersList.appendChild(voteBtn);
    });

    const skipBtn = document.createElement("button");
    skipBtn.textContent = "Skip";
    skipBtn.addEventListener("click", View.resolveVotes);

    main.appendChild(votePrompt);
    main.appendChild(playersList);
    main.appendChild(skipBtn);
  };

  const highlight = (text) => {
    const span = `<span class="text-red">${text}</span>`;
    return span;
  };

  const resolveVotes = (data) => {
    main.innerHTML = "";

    const container = document.createElement("div");
    container.classList.add("focus-view");

    let text;
    // Change text output based on whether there is a person voted out
    if ("VotedOut" in data) {
      text = `The villagers have cast their votes, and the results are in.<br> ${highlight(
        data["VotedOut"]
      )} has the most votes and is lynched by the village.`;
    } else {
      text =
        "The villagers have decided to skip the voting phase.<br>" +
        highlight("No one") +
        " will be lynched by the village today.";
    }

    // Result of the voting
    const resolution = document.createElement("h3");
    resolution.innerHTML = text;
    resolution.classList.add("text-center");
    container.appendChild(resolution);

    // Continue button
    const continueBtn = document.createElement("button");
    continueBtn.textContent = "CONTINUE";
    continueBtn.addEventListener("click", Game.startNight);

    main.appendChild(container);
    main.appendChild(continueBtn);
  };

  const renderRoles = (roles) => {
    let text = "";
    Object.entries(roles).forEach(([role, quantity]) => {
      if (quantity !== 0) text += role + " : " + quantity + ", ";
    });
    return text;
  };

  const renderDay = (dayCount) => {
    main.innerHTML = "";

    const dayElement = document.createElement("div");
    dayElement.classList.add("center");
    const dayText = document.createElement("header");
    dayText.classList.add("text-xl");
    dayText.textContent = "Day " + dayCount;

    const discussPrompt = document.createElement("p");
    discussPrompt.classList.add("spaced-vertical");
    discussPrompt.classList.add("text-center");
    discussPrompt.innerHTML = `It's the ${toOrdinal(
      dayCount
    )} day of the game, and the village is already on edge. Rumors of werewolves lurking in the shadows have everyone on edge. The villagers must come together and discuss their suspicions to determine who among them may be the werewolves. Who do you suspect and why? What evidence do you have to support your suspicions?<br><br>
    (The roles in this game are <br>${renderRoles(Game.prevRoles)})`;

    const gotoVoteBtn = document.createElement("button");
    gotoVoteBtn.textContent = "START VOTING";
    gotoVoteBtn.addEventListener("click", renderVotingScreen);

    dayElement.appendChild(dayText);
    dayElement.appendChild(discussPrompt);
    dayElement.appendChild(gotoVoteBtn);
    main.appendChild(dayElement);
  };

  const renderGameOver = (players, winner) => {
    main.innerHTML = "";
    main.appendChild(titleView());

    const gameOverText = document.createElement("h2");
    gameOverText.textContent = "Game Over!";

    const results = document.createElement("p");
    results.textContent = `${winner} Win!`;

    const playersList = document.createElement("ul");
    playersList.classList.add("spaced-vertical");
    players.forEach((player) => {
      const playerView = document.createElement("li");
      const name = document.createElement("header");
      name.textContent = `${player.name} => ${player.role.name}`;
      if (player.role.name === "mercenary")
        name.textContent += ` (Target = ${
          Game.getPlayerById(player.role.target).name
        })`;
      if (player.role.team === winner) name.style.color = "yellow";

      playerView.appendChild(name);
      playersList.appendChild(playerView);
    });

    const startNewGameBtn = document.createElement("button");
    startNewGameBtn.textContent = "Start New Game";
    startNewGameBtn.addEventListener("click", Control.startNewGame);

    main.appendChild(gameOverText);
    main.appendChild(results);
    main.appendChild(playersList);
    main.appendChild(startNewGameBtn);
  };

  const resolveNight = (names) => {
    main.innerHTML = "";
    main.appendChild(titleView());

    const resolution = document.createElement("h3");
    if (names.length === 0) {
      resolution.innerHTML =
        "It's the morning after the first night, and the villagers are relieved to find that no one was killed by the werewolves.";
    } else {
      resolution.innerHTML = `It's the morning after the first night, and the villagers are shocked to find ${highlight(
        names.join(", ")
      )} killed during the night.`;
    }

    const continueBtn = document.createElement("button");
    continueBtn.classList.add("spaced-vertical");
    continueBtn.textContent = "continue";
    continueBtn.addEventListener("click", Game.startDay);

    main.appendChild(resolution);
    main.appendChild(continueBtn);
  };

  const renderStart = () => {
    main.innerHTML = "";

    const currentPlayers = document.createElement("div");
    currentPlayers.classList.add("spaced-vertical");
    const playersList = document.createElement("ul");
    playersList.id = "players-list";
    currentPlayers.classList.add("spaced-vertical");
    currentPlayers.textContent = "Current Players: ";
    currentPlayers.appendChild(playersList);

    const startBtn = document.createElement("button");
    startBtn.textContent = "START";
    startBtn.addEventListener("click", renderChooseRoles.bind(window, Game));

    main.appendChild(titleView());
    main.appendChild(addPlayerForm());
    main.appendChild(currentPlayers);
    main.appendChild(startBtn);
  };

  return {
    renderStart,
    renderGameOver,
    renderChooseRoles,
    renderDay,
    revealRoles,
    resolveNight,
    resolveVotes,
    displayCurrentPlayers,
  };
})();

export default View;
