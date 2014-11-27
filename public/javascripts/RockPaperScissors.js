function Computer(name) {
  this.name = name;
  this.winCount = 0;
};

Computer.prototype.picks = function() {
  var choices = ['rock', 'paper', 'scissors', 'lizard', 'spock']
  this.pick = choices[Math.floor(Math.random() * choices.length)];
};

Computer.prototype.wins = function() {
  this.winCount++ ;
};

function Player(name) {
  this.name = name;
  this.winCount = 0;
};


Player.prototype.picks = function(pick) {
  this.pick = pick;
};

Player.prototype.wins = function() {
  this.winCount++ ;
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


Game.prototype.evaluateWinner = function() {
  var player2pick = this.player2.pick;
  var player1beatsarray = this.pairs[this.player1.pick];
  var a = player1beatsarray.indexOf(player2pick)
  if (this._samePick()) { return null }
  else if (a >= 0) { 
    this.player1.wins();
    this.winner = this.player1;

  } else { 
    this.player2.wins();  
    this.winner = this.player2;} 
};


Game.prototype.loser = function() {
  if (this.winner === this.player1 ){
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
  if (this._samePick()) {return "Draw"}
    else { 
      this.evaluateWinner();
  return this.winner.name + "'s" + " " + this.winner.pick + " " + this.verb() + " " +
   this.loser().name + '\'s' + " " + this.loser().pick + ", " + this.winner.name + " wins!"} 
};

Game.prototype.countMessage = function() {
  return this.player1.name + ': ' + this.player1.winCount + " " + " " + this.player2.name + ': ' + this.player2.winCount;
}

Game.prototype.verb = function() {
  return this._verbsHash[this.winner.pick][this.loser().pick]
}

Game.prototype._verbsHash = {
  rock:     {'scissors' : 'crushes', 'lizard' : 'crushes'}, 
  paper:    {'rock' : 'covers', 'spock' : 'disproves'},
  scissors: {'paper' : 'cuts', 'lizard' : 'decapitates'},
  spock:    {'scissors' : 'smashes', 'rock' : 'vapourises'},
  lizard:   {'spock' : 'poisons', 'paper' : 'eats'}
};









