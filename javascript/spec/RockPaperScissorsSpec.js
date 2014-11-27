describe("Rock-Paper-Scissors", function() {
  var player1, player2, game, computer;
  
  beforeEach(function() {

    player1 = new Player('Sam');
    player2 = new Player('Tony');
    computer = new Computer('Tron');
    game = new Game(player1, player2);

  });

  describe('computer', function() {

    describe('when playing', function() {

      it('should make a random pick', function() {
        computer.picks();
        expect(computer.pick).not.toBe(null);
      });

    });

  });


  describe('winning and losing', function() {


    describe('rock', function() {

      it('should beat scissors', function() {
        player1.picks('rock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);
      });

      it('with a victory message', function() {
        player1.picks('rock');
        player2.picks('scissors');
        expect(game.victoryMessage()).toEqual("Sam's rock crushes Tony's scissors, Sam wins!")
      });

      it('should beat lizard', function() {

        player1.picks('rock');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);
      });

      it('with a victory message', function() {
        player1.picks('rock');
        player2.picks('lizard');
        expect(game.victoryMessage()).toEqual("Sam's rock crushes Tony's lizard, Sam wins!")
      });

      it('should lose to paper', function() {
        player1.picks('rock');
        player2.picks('paper');
        expect(game.loser()).toBe(player1);
      });

      it('with a victory message', function() {
        player1.picks('rock');
        player2.picks('paper');
        expect(game.victoryMessage()).toEqual("Tony's paper covers Sam's rock, Tony wins!")
      });

      it('should lose to spock', function() {
        player1.picks('rock');
        player2.picks('spock');
        expect(game.loser()).toBe(player1);
      });

      it('with a victory message', function() {
        player1.picks('rock');
        player2.picks('spock');
        expect(game.victoryMessage()).toEqual("Tony's spock vapourises Sam's rock, Tony wins!")
      });

    });

    describe('paper', function() {

      it('should beat rock', function() {
        player1.picks('paper');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);
      });

      it('with a victory message', function() {
        player1.picks('paper');
        player2.picks('rock');
        expect(game.victoryMessage()).toEqual("Sam's paper covers Tony's rock, Sam wins!")
      });

      it('should beat spock', function() {
        player1.picks('paper');
        player2.picks('spock');
        expect(game.winner()).toBe(player1);
      });

      it('with a victory message', function() {
        player1.picks('paper');
        player2.picks('spock');
        expect(game.victoryMessage()).toEqual("Sam's paper disproves Tony's spock, Sam wins!")
      });

      it('should lose to scissors', function() {
        player1.picks('paper');
        player2.picks('scissors');
        expect(game.loser()).toBe(player1);
      });

      it('with a victory message', function() {
        player1.picks('paper');
        player2.picks('scissors');
        expect(game.victoryMessage()).toEqual("Tony's scissors cuts Sam's paper, Tony wins!")
      });

      it('should lose to lizard', function() {
        player1.picks('paper');
        player2.picks('lizard');
        expect(game.loser()).toBe(player1);
      });

      it('with a victory message', function() {
        player1.picks('paper');
        player2.picks('lizard');
        expect(game.victoryMessage()).toEqual("Tony's lizard eats Sam's paper, Tony wins!")
      });
      

    });

    describe('scissors', function() {

      it('should beat paper', function() {
        player1.picks('scissors');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);
      });

      it('with a victory message', function() {
        player1.picks('scissors');
        player2.picks('paper');
        expect(game.victoryMessage()).toEqual("Sam's scissors cuts Tony's paper, Sam wins!")
      });

      it('should beat lizard', function() {
        player1.picks('scissors');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);
      });

      it('with a victory message', function() {
        player1.picks('scissors');
        player2.picks('lizard');
        expect(game.victoryMessage()).toEqual("Sam's scissors decapitates Tony's lizard, Sam wins!")
      });

      it('should lose to rock', function() {
        player1.picks('scissors');
        player2.picks('rock');
        expect(game.loser()).toBe(player1);
      });

      it('with a victory message', function() {
        player1.picks('scissors');
        player2.picks('rock');
        expect(game.victoryMessage()).toEqual("Tony's rock crushes Sam's scissors, Tony wins!")
      });

      it('should lose to spock', function() {
        player1.picks('scissors');
        player2.picks('spock');
        expect(game.loser()).toBe(player1);
      });

      it('with a victory message', function() {
        player1.picks('scissors');
        player2.picks('spock');
        expect(game.victoryMessage()).toEqual("Tony's spock smashes Sam's scissors, Tony wins!")
      });
      

    });

    describe('spock', function() {

      it('should beat rock', function() {
        player1.picks('spock');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);
      });

      it('with a victory message', function() {
        player1.picks('spock');
        player2.picks('rock');
        expect(game.victoryMessage()).toEqual("Sam's spock vapourises Tony's rock, Sam wins!")
      });

      it('should beat scissors', function() {
        player1.picks('spock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);
      });

      it('with a victory message', function() {
        player1.picks('spock');
        player2.picks('scissors');
        expect(game.victoryMessage()).toEqual("Sam's spock smashes Tony's scissors, Sam wins!")
      });
      
      it('should lose to lizard', function() {
        player1.picks('spock');
        player2.picks('lizard');
        expect(game.loser()).toBe(player1);
      });

      it('with a victory message', function() {
        player1.picks('spock');
        player2.picks('lizard');
        expect(game.victoryMessage()).toEqual("Tony's lizard poisons Sam's spock, Tony wins!")
      });

      it('should lose to paper', function() {
        player1.picks('spock');
        player2.picks('paper');
        expect(game.loser()).toBe(player1);
      });

      it('with a victory message', function() {
        player1.picks('spock');
        player2.picks('paper');
        expect(game.victoryMessage()).toEqual("Tony's paper disproves Sam's spock, Tony wins!")
      });

    });

    describe('lizard', function() {

      it('should beat spock', function() {
        player1.picks('lizard');
        player2.picks('spock');
        expect(game.winner()).toBe(player1);
      });

      it('with a victory message', function() {
        player1.picks('lizard');
        player2.picks('spock');
        expect(game.victoryMessage()).toEqual("Sam's lizard poisons Tony's spock, Sam wins!")
      });

      it('should beat paper', function() {
        player1.picks('lizard');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);
      });

      it('with a victory message', function() {
        player1.picks('lizard');
        player2.picks('paper');
        expect(game.victoryMessage()).toEqual("Sam's lizard eats Tony's paper, Sam wins!")
      });

      it('should lose to scissors', function() {
        player1.picks('lizard');
        player2.picks('scissors');
        expect(game.loser()).toBe(player1);
      });

      it('with a victory message', function() {
        player1.picks('lizard');
        player2.picks('scissors');
        expect(game.victoryMessage()).toEqual("Tony's scissors decapitates Sam's lizard, Tony wins!")
      });

      it('should lose to rock', function() {
        player1.picks('lizard');
        player2.picks('rock');
        expect(game.loser()).toBe(player1);
      });

      it('with a victory message', function() {
        player1.picks('lizard');
        player2.picks('rock');
        expect(game.victoryMessage()).toEqual("Tony's rock crushes Sam's lizard, Tony wins!")
      });

    });


  });




  describe('draws', function() {

    describe('any identical picks', function() {

      it('should result in no winner', function() {

        var drawGameResults = ['rock', 'paper', 'scissors'].map(function(x) {
          player1.picks(x);
          player2.picks(x);
          return game.winner();
        });

        expect(drawGameResults).toEqual([null, null, null]);

      });

    });

  });

});