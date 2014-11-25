function Player(name) {
  this.name = name;
};

Player.prototype.picks = function(pick) {
  this.pick = pick;
};


function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.winner = function(player1, player2) {
  if (this.draw) return null;
  else if ()
}

Game.prototype.draw = function(player1, player2) {
  player1.pick === player2.pick;
}