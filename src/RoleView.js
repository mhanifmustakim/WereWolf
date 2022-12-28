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
    nextBtn.disabled = true;
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
    container.appendChild(nextBtn);
    main.appendChild(container);
  };

  return {
    render,
  };
})();

export default RoleView;
