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
  rock:     ['scissors', 'lizard'], 
  paper:    ['rock', 'spock'],
  scissors: ['paper', 'lizard'],
  spock:    ['scissors', 'rock'],
  lizard:   ['spock', 'paper']
};


Game.prototype.winner = function() {
  var player2pick = this.player2.pick;
  var player1beatsarray = this.pairs[this.player1.pick];
  var a = player1beatsarray.indexOf(player2pick)
  if (this._samePick()) { return null }
  else if (a >= 0) { return this.player1 }
  else { return this.player2 } 
};

Game.prototype.loser = function() {
  if (this.winner() === this.player1 ){
    return this.player2;
  }
  else {
    return this.player1;
  };
};

Game.prototype._samePick = function() {
  return this.player1.pick === this.player2.pick;
};

Game.prototype.victoryMessage = function() {
  return this.winner().name + "'s" + " " + this.winner().pick + " " + this.verb() + " " + this.loser().name + '\'s' + " " + this.loser().pick
};

Game.prototype.verb = function() {
  return this._verbsHash[this.winner().pick][this.loser().pick]
}

Game.prototype._verbsHash = {
  rock:     {'scissors' : 'crushes', 'lizard' : 'crushes'}, 
  paper:    {'rock' : 'covers', 'spock' : 'disproves'},
  scissors: {'paper' : 'cuts', 'lizard' : 'decapitates'},
  spock:    {'scissors' : 'smashes', 'rock' : 'vapourises'},
  lizard:   {'spock' : 'poisons', 'paper' : 'eats'}
};









