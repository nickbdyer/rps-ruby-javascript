function Computer(name) {
  this.name = name;
};

Computer.prototype.picks = function() {
  var choices = ['rock', 'paper', 'scissors']
  this.pick = choices[Math.floor(Math.random() * choices.length)];
};


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

Game.prototype.pairs = {
  rock: 'scissors', 
  paper: 'rock',
  scissors: 'paper'
}


Game.prototype.winner = function(player1, player2) {
  if (this.samePick()) { return null }
  else if (this.pairs[this.player1.pick] === this.player2.pick) { return this.player1 }
  else { return this.player2 } 
}

Game.prototype.samePick = function() {
  return this.player1.pick === this.player2.pick;
}