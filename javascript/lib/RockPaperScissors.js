function Player() {};

Player.prototype.picks = function() {};


function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.winner = function() {
  return this.player1;
};
