$(document).ready(function() {
  var remove = function() {
    $(this).remove();
  };

  var render = function(game){
    var html = $('#list-item-template').html();
    var data = {message: game.victoryMessage()};
    return Mustache.render(html, data);
  };


  var ben = new Player('Ben');
  var nick = new Player('Nick');
  var tron = new Computer('Tron')
  var game = new Game(ben, tron);


  $('.choices span').on('click', function() {
    ben.picks($(this).data('pick'));
    tron.picks();
    $(render(game)).prependTo('#results').slideDown();
    $('li:nth-child(5)').fadeOut(3000,remove);
    $('.counter').html(game.countMessage());
  });

  $('.choices').mouseenter(function(e) {
    $(this).children('span').fadeIn(200);
  }).mouseleave(function(e) {
    $(this).children('span').fadeOut(200);
  });

});