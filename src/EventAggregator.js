import PubSub from "pubsub-js";
import Game from "./Game";
import Player from "./Player";
import View from "./View";

const EventAggregator = (function () {
  PubSub.subscribe("PlayerAdded", (msg, name) => {
    const player = Player(name);
    Game.addPlayer(player);
    View.displayCurrentPlayers(Game.players);
  });

  PubSub.subscribe("StartGame", (msg, data) => {
    Game.setRoles(data);
    Game.start();
  });

  PubSub.subscribe("Voted", (msg, playerId) => {
    Game.voteOut(playerId);

    const player = Game.getPlayerById(playerId);
    View.resolveVotes({ VotedOut: player.name });
  });

  PubSub.subscribe("GameOver", (msg, { players, winner }) => {
    View.renderGameOver(players, winner);
  });

  PubSub.subscribe("Reset", (msg, players) => {
    Game.reset();
    View.renderChooseRoles(Game);
  });
})();

export default EventAggregator;
