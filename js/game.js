$( document ).ready(function() {

  var playGame = ['rock', 'paper', 'scissors', 'spock', 'lizard'];
  var userScore = 0;
  var computerScore = 0;
  var rounds = 0;

  $('.btn-success').click(function(){
    $('.btn-success').addClass('btn-hide');
    $('.btn-primary').removeClass('btn-hide');
  });

  $('.btn-success').addClass('expandOpen');
  $('.btn-primary').addClass('slideDown');

  function theGame(){
    $(document).on('click','.control', function(){

      $('#rounds').html(rounds);

      var randomString = playGame[Math.floor(Math.random() * playGame.length)];
      var choice = $(this).data('value');

      if (choice == 'rock' && randomString == 'rock'){
        $(this).addClass('hatch');
        $('#msg').html('A mutual \'rock\'. No points awarded.');
        rounds++;
        $('#rounds').html(rounds);
        setTimeout(function() {
          $('.btn-primary').removeClass('hatch slideDown');
        }, 800);
      } else if (choice == 'rock' && randomString == 'scissors'){
        $(this).addClass('hatch');
        $('#msg').html('You smash their scissors with your rock!');
        userScore++;
        rounds++;
        $('#rounds').html(rounds);
        setTimeout(function() {
          $('.btn-primary').removeClass('hatch slideDown');
        }, 800);
      } else if (choice == 'rock' && randomString == 'paper'){
        $(this).addClass('hatch');
        $('#msg').html('Their paper covers your rock (lame)');
        computerScore++;
        rounds++;
        $('#rounds').html(rounds);
        setTimeout(function() {
          $('.btn-primary').removeClass('hatch slideDown');
        }, 800);
      } else if (choice == 'rock' && randomString == 'lizard'){
        $(this).addClass('hatch');
        $('#msg').html('You smash the lizard with your rock! (ew)');
        userScore++;
        rounds++;
        $('#rounds').html(rounds);
        setTimeout(function() {
          $('.btn-primary').removeClass('hatch slideDown');
        }, 800);
      } else if (choice == 'rock' && randomString == 'spock'){
        $(this).addClass('hatch');
        $('#msg').html('Spock is not impressed by your rock.');
        computerScore++;
        rounds++;
        $('#rounds').html(rounds);
        setTimeout(function() {
          $('.btn-primary').removeClass('hatch slideDown');
        }, 800);

      } else if (choice == 'paper' && randomString == 'paper'){
        $(this).addClass('hatch');
        $('#msg').html('A mutual \'paper\'. No points awarded.');
        rounds++;
        $('#rounds').html(rounds);
        setTimeout(function() {
          $('.btn-primary').removeClass('hatch slideDown');
        }, 800);
      } else if (choice == 'paper' && randomString == 'rock'){
        $(this).addClass('hatch');
        $('#msg').html('Your paper covers their rock! Victory!');
        userScore++;
        rounds++;
        $('#rounds').html(rounds);
        setTimeout(function() {
          $('.btn-primary').removeClass('hatch slideDown');
        }, 800);
      } else if (choice == 'paper' && randomString == 'scissors'){
        $(this).addClass('hatch');
        $('#msg').html('Their scissors cut your paper.');
        computerScore++;
        rounds++;
        $('#rounds').html(rounds);
        setTimeout(function() {
          $('.btn-primary').removeClass('hatch slideDown');
        }, 800);
      } else if (choice == 'paper' && randomString == 'lizard'){
        $(this).addClass('hatch');
        $('#msg').html('The lizard snaps up your paper. Oops.');
        computerScore++;
        rounds++;
        $('#rounds').html(rounds);
        setTimeout(function() {
          $('.btn-primary').removeClass('hatch slideDown');
        }, 800);
      } else if (choice == 'paper' && randomString == 'spock'){
        $(this).addClass('hatch');
        $('#msg').html('Spock is distracted reading your paper. Score!');
        userScore++;
        rounds++;
        $('#rounds').html(rounds);
        setTimeout(function() {
          $('.btn-primary').removeClass('hatch slideDown');
        }, 800);

      } else if (choice == 'scissors' && randomString == 'scissors'){
        $(this).addClass('hatch');
        $('#msg').html('A mutual \'scissors\'. No points awarded.');
        rounds++;
        $('#rounds').html(rounds); 
        setTimeout(function() {
          $('.btn-primary').removeClass('hatch slideDown');
        }, 800);
      
      } else if (choice == 'scissors' && randomString == 'paper'){
        $(this).addClass('hatch');
        $('#msg').html('You cut up their paper with your scissors!');
        userScore++;
        rounds++;
        $('#rounds').html(rounds);
        setTimeout(function() {
          $('.btn-primary').removeClass('hatch slideDown');
        }, 800);

      } else if (choice == 'scissors' && randomString == 'rock'){
        $(this).addClass('hatch');
        $('#msg').html('Their rock smashes your scissors');
        computerScore++;
        rounds++;
        $('#rounds').html(rounds);
        setTimeout(function() {
          $('.btn-primary').removeClass('hatch slideDown');
        }, 800);

      } else if (choice == 'scissors' && randomString == 'lizard'){
        $(this).addClass('hatch');
        $('#msg').html('Their lizard is no match for your scissors.');
        userScore++;
        rounds++;
        $('#rounds').html(rounds);
        setTimeout(function() {
          $('.btn-primary').removeClass('hatch slideDown');
        }, 800);

      } else if (choice == 'scissors' && randomString == 'spock'){
        $(this).addClass('hatch');
        $('#msg').html('Spock uses your scissors to trim his eyebrows.');
        computerScore++;
        rounds++;
        $('#rounds').html(rounds);
        setTimeout(function() {
          $('.btn-primary').removeClass('hatch slideDown');
        }, 800);
      
      } else if (choice == 'lizard' && randomString == 'lizard'){
        $(this).addClass('hatch');
        $('#msg').html('A mutual \'lizard\'. No points awarded.');
        rounds++;
        $('#rounds').html(rounds);
        setTimeout(function() {
          $('.btn-primary').removeClass('hatch slideDown');
        }, 800);
  
      } else if (choice == 'lizard' && randomString == 'paper'){
        $(this).addClass('hatch');
        $('#msg').html('Your lizard chews up their paper.');
        userScore++;
        rounds++;
        $('#rounds').html(rounds);
        setTimeout(function() {
          $('.btn-primary').removeClass('hatch slideDown');
        }, 800);

      } else if (choice == 'lizard' && randomString == 'rock'){
        $(this).addClass('hatch');
        $('#msg').html('Their rock smashes your lizard. ...ew.');
        computerScore++;
        rounds++;
        $('#rounds').html(rounds);
        setTimeout(function() {
          $('.btn-primary').removeClass('hatch slideDown');
        }, 800);

      } else if (choice == 'lizard' && randomString == 'scissors'){
        $(this).addClass('hatch');
        $('#msg').html('Their scissors... they do mean things to your lizard. Sorry.');
        computerScore++;
        rounds++;
        $('#rounds').html(rounds);
        setTimeout(function() {
          $('.btn-primary').removeClass('hatch slideDown');
        }, 800);

      } else if (choice == 'lizard' && randomString == 'spock'){
        $(this).addClass('hatch');
        $('#msg').html('Your lizard poisons Spock!');
        userScore++;
        rounds++;
        $('#rounds').html(rounds);
        setTimeout(function() {
          $('.btn-primary').removeClass('hatch slideDown');
        }, 800);


      } else if (choice == 'spock' && randomString == 'spock'){
        $(this).addClass('hatch');
        $('#msg').html('A mutual \'spock\'. No points awarded.');
        rounds++;
        $('#rounds').html(rounds);
        setTimeout(function() {
          $('.btn-primary').removeClass('hatch slideDown');
        }, 800);

      } else if (choice == 'spock' && randomString == 'paper'){
        $(this).addClass('hatch');
        $('#msg').html('The paper is too interesting, your Spock is done for.');
        computerScore++;
        rounds++;
        $('#rounds').html(rounds);
        setTimeout(function() {
          $('.btn-primary').removeClass('hatch slideDown');
        }, 800);

      } else if (choice == 'spock' && randomString == 'rock'){
        $(this).addClass('hatch');
        $('#msg').html('Spock vaporizes their rock.');
        computerScore++;
        rounds++;
        $('#rounds').html(rounds);
        setTimeout(function() {
          $('.btn-primary').removeClass('hatch slideDown');
        }, 800);

      } else if (choice == 'spock' && randomString == 'scissors'){
        $(this).addClass('hatch');
        $('#msg').html('Spock smashes their scissors with his opposable thumbs.');
        userScore++;
        rounds++;
        $('#rounds').html(rounds);
        setTimeout(function() {
          $('.btn-primary').removeClass('hatch slideDown');
        }, 800);

      } else if (choice == 'spock' && randomString == 'lizard'){
        $(this).addClass('hatch');
        $('#msg').html('Their lizard poisons Spock!');
        computerScore++;
        rounds++;
        $('#rounds').html(rounds);
        setTimeout(function() {
          $('.btn-primary').removeClass('hatch slideDown');
        }, 800);

      }
        $('#computer-score').html('Computer: '+ computerScore); 
        $('#user-score').html('User: '+ userScore); 
      scoreBoard();
    });
  }

  function scoreBoard() {
    if (rounds > 4) {
      if (userScore > computerScore) {
        setTimeout(function() {
          $('#msg').empty();
          bootbox.alert('You win!');
          $('#rounds').html('You win! Play again?')
          $('.btn-primary').addClass('btn-hide slideDown');
          $('.btn-success').removeClass('btn-hide');
          rounds = 0;
          computerScore = 0;
          userScore = 0;
        }, 1500);

      } else if (computerScore > userScore) {
        setTimeout(function() {
          $('#msg').empty();
          bootbox.alert('You lose!');
          $('#rounds').html('You lose! Play again?')
          $('.btn-primary').addClass('btn-hide slideDown');
          $('.btn-success').removeClass('btn-hide');
          rounds = 0;
          computerScore = 0;
          userScore = 0;
        }, 1500);
      } else if (computerScore == userScore) {
        setTimeout(function() {
          $('#msg').empty();
          bootbox.alert('It\'s a tie!');
          $('#rounds').html('It\'s a tie!')
          $('.btn-primary').addClass('btn-hide slideDown');
          $('.btn-success').removeClass('btn-hide');
          rounds = 0;
          computerScore = 0;
          userScore = 0;
        }, 1500);
      };
      
    };
  }

  theGame();
  

});