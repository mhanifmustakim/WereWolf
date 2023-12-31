import Game from "./Game";
import Roles from "./Roles";

const RoleView = (function () {
  const enableNextBtn = () => {
    document.querySelector("#nextButton").disabled = false;
  };

  const roles = {
    werewolf: function () {
      const mainElement = document.createElement("div");
      const werewolf = Roles["werewolf"]();
      Game.players.forEach((player) => {
        if (player.role.name !== "werewolf" && player.isAlive) {
          const playerName = document.createElement("p");
          playerName.textContent = player.name;
          const killBtn = document.createElement("button");
          killBtn.textContent = "KILL";
          killBtn.addEventListener("click", (e) => {
            e.target.style.backgroundColor = "red";
            e.target.style.color = "white";
            const buttons = mainElement.querySelectorAll("button");
            buttons.forEach((button) => (button.disabled = true));
            werewolf.action.kill(player.id);
            enableNextBtn();
          });

          mainElement.appendChild(playerName);
          mainElement.appendChild(killBtn);
        }
      });
      return mainElement;
    },
    seer: function () {
      const mainElement = document.createElement("div");
      const seer = Roles["seer"]();
      Game.players.forEach((player) => {
        if (!player.isAlive || player.role.name === "seer") return;
        const playerName = document.createElement("p");
        playerName.textContent = player.name;
        const revealBtn = document.createElement("button");
        revealBtn.textContent = "REVEAL";
        revealBtn.addEventListener("click", () => {
          mainElement.innerHTML = "";
          const role = document.createElement("h3");
          role.classList.add("text-xl");
          role.textContent = `${player.name} is a ${seer.action.reveal(
            player.id
          )}.`;
          mainElement.appendChild(role);
          enableNextBtn();
        });
        if (player.hasRevealed) revealBtn.disabled = true;

        mainElement.appendChild(playerName);
        mainElement.appendChild(revealBtn);
      });

      return mainElement;
    },
    doctor: function () {
      const mainElement = document.createElement("div");
      const doctor = Roles["doctor"]();
      Game.players.forEach((player) => {
        if (!player.isAlive || player.role.name === "doctor") return;
        const playerName = document.createElement("p");
        playerName.textContent = player.name;
        const healBtn = document.createElement("button");
        healBtn.textContent = "HEAL";
        healBtn.addEventListener("click", (e) => {
          e.target.style.backgroundColor = "green";
          e.target.style.color = "white";
          const buttons = mainElement.querySelectorAll("button");
          buttons.forEach((button) => (button.disabled = true));
          doctor.action.heal(player.id);
          enableNextBtn();
        });
        mainElement.appendChild(playerName);
        mainElement.appendChild(healBtn);
      });

      return mainElement;
    },
    bodyguard: function () {
      const mainElement = document.createElement("div");
      const bodyguardRole = Roles["bodyguard"]();
      const bodyguardPlayer = Game.players.filter(
        (player) => player.role.name === "bodyguard"
      )[0];
      Game.players.forEach((player) => {
        if (!player.isAlive || player.role.name === "bodyguard") return;
        const playerName = document.createElement("p");
        playerName.textContent = player.name;
        const guardBtn = document.createElement("button");

        guardBtn.textContent = "GUARD";
        if (bodyguardPlayer.role.powerUsed) guardBtn.disabled = true;

        guardBtn.addEventListener("click", (e) => {
          e.target.style.backgroundColor = "green";
          e.target.style.color = "white";
          const buttons = mainElement.querySelectorAll("button");
          buttons.forEach((button) => (button.disabled = true));
          bodyguardRole.action.guard(player.id);
          enableNextBtn();
        });
        mainElement.appendChild(playerName);
        mainElement.appendChild(guardBtn);
      });

      return mainElement;
    },

    assassin: function () {
      const mainElement = document.createElement("div");
      const assassinRole = Roles["assassin"]();
      const assassinPlayer = Game.players.filter(
        (player) => player.role.name === "assassin"
      )[0];
      Game.players.forEach((player) => {
        if (!player.isAlive || player.role.name === "assassin") return;
        const playerName = document.createElement("p");
        playerName.textContent = player.name;
        const killBtn = document.createElement("button");

        killBtn.textContent = "KILL";
        if (assassinPlayer.role.powerUsed === true) killBtn.disabled = true;

        killBtn.addEventListener("click", (e) => {
          e.target.style.backgroundColor = "crimson";
          e.target.style.color = "white";
          const buttons = mainElement.querySelectorAll("button");
          buttons.forEach((button) => (button.disabled = true));
          assassinRole.action.kill(player.id);
          enableNextBtn();
        });
        mainElement.appendChild(playerName);
        mainElement.appendChild(killBtn);
      });

      return mainElement;
    },

    detective: function () {
      const mainElement = document.createElement("div");
      const detective = Roles["detective"]();
      let buttonsClicked = [];
      Game.players.forEach((player) => {
        if (!player.isAlive || player.role.name === "detective") return;
        const playerName = document.createElement("p");
        playerName.textContent = player.name;
        const revealBtn = document.createElement("button");
        revealBtn.textContent = "CHECK";
        revealBtn.addEventListener("click", (e) => {
          buttonsClicked.push(player.id);
          e.target.style.backgroundColor = "green";
          e.target.style.color = "white";
          e.target.disabled = true;
          if (buttonsClicked.length == 2) {
            mainElement.innerHTML = "";
            const result = document.createElement("h3");
            result.classList.add("text-xl");
            result.textContent = `${
              Game.getPlayerById(buttonsClicked[0]).name
            } and ${Game.getPlayerById(buttonsClicked[1]).name} are in ${
              detective.action.choose(...buttonsClicked)
                ? "the same team!"
                : "different teams!"
            }`;
            mainElement.appendChild(result);
            enableNextBtn();
          }
        });

        mainElement.appendChild(playerName);
        mainElement.appendChild(revealBtn);
      });

      return mainElement;
    },

    witch: function () {
      const mainElement = document.createElement("div");
      const witch = Roles["witch"]();
      const deadPlayers = Game.players.filter((player) => !player.isAlive);

      if (deadPlayers.length === 0) {
        const text = document.createElement("p");
        text.textContent = "There are no players dead yet!";
        mainElement.appendChild(text);
        return mainElement;
      }

      deadPlayers.forEach((player) => {
        const playerName = document.createElement("p");
        playerName.textContent = player.name;
        const revealBtn = document.createElement("button");
        revealBtn.textContent = "CHECK";
        revealBtn.addEventListener("click", () => {
          mainElement.innerHTML = "";
          const role = document.createElement("h3");
          role.classList.add("text-xl");
          role.textContent = `${player.name} is a ${witch.action.reveal(
            player.id
          )}.`;
          mainElement.appendChild(role);
          enableNextBtn();
        });

        mainElement.appendChild(playerName);
        mainElement.appendChild(revealBtn);
      });

      return mainElement;
    },
  };

  const render = (nightRoles, current = 0) => {
    const currentRole = nightRoles[current];
    let nextRole = false;
    if (current !== nightRoles.length - 1) {
      nextRole = true;
    }

    const main = document.querySelector("#main");
    main.innerHTML = "";

    const container = document.createElement("div");
    container.id = "action-screen";

    const header = document.createElement("header");
    header.textContent = "Night action of the " + currentRole + ": ";
    header.classList.add("text-l");

    const roleActionContainer = document.createElement("div");
    const element = roles[currentRole]();
    element.classList.add("role-action");
    roleActionContainer.appendChild(element);
    roleActionContainer.classList.add("center-x");
    roleActionContainer.classList.add("role-action-container");

    container.appendChild(header);
    container.appendChild(roleActionContainer);

    const nextBtn = document.createElement("button");
    nextBtn.disabled = !Array.from(element.querySelectorAll("button")).every(
      (button) => button.disabled === true
    );
    nextBtn.id = "nextButton";
    if (nextRole) {
      nextBtn.textContent = "NEXT ROLE";
      nextBtn.addEventListener(
        "click",
        render.bind(window, nightRoles, current + 1)
      );
    } else {
      nextBtn.textContent = "GO TO DAY";
      nextBtn.addEventListener("click", Game.finishNight);
    }

    let playerRole = Game.players.filter(
      (player) => player.isAlive && player.role.name === currentRole
    );

    if (
      Game.players.filter((player) => !player.isAlive).length === 0 &&
      currentRole === "witch"
    ) {
      nextBtn.disabled = false;
    }

    if (playerRole.length === 0) {
      element
        .querySelectorAll("button")
        .forEach((btn) => (btn.disabled = true));
      nextBtn.disabled = false;
    } else {
      playerRole = playerRole[0];
      if ("powerUsed" in playerRole.role) nextBtn.disabled = false;
    }

    container.appendChild(nextBtn);
    main.appendChild(container);
  };

  return {
    render,
  };
})();

export default RoleView;
