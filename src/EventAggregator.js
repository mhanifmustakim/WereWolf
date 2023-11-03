import PubSub from "pubsub-js";
import Game from "./Game";
import Player from "./Player";
import View from "./View";

const EventAggregator = (function () {
  PubSub.subscribe("PlayerAdded", (msg, name) => {
    // Create Player object
    const player = Player(name);
    Game.addPlayer(player);
    View.displayCurrentPlayers(Game.players);
  });

  PubSub.subscribe("StartGame", (msg, data) => {
    // Set roles to each Player
    Game.setRoles(data);
    Game.start();
  });

  PubSub.subscribe("Voted", (msg, playerId) => {
    Game.voteOut(playerId);

    // Show results of voting screen
    const player = Game.getPlayerById(playerId);
    View.resolveVotes({ VotedOut: player.name });
  });

  PubSub.subscribe("GameOver", (msg, { players, winner }) => {
    View.renderGameOver(players, winner);
  });

  PubSub.subscribe("Reset", (msg, players) => {
    // Reset players data
    Game.reset();

    // Show Roles Count Selection Screen, (Resets game state in StartGame)
    View.renderChooseRoles(Game);
  });
})();

export default EventAggregator;
