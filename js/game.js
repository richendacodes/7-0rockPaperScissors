$( document ).ready(function() {


  // $("#myModal").on("show", function() {    // wire up the OK button to dismiss the modal when shown
  //       $("#myModal a.btn").on("click", function(e) {
  //           console.log("button pressed");   // just as an example...
  //           $("#myModal").modal('hide');     // dismiss the dialog
  //       });
  //   });
  //   $("#myModal").on("hide", function() {    // remove the event listeners when the dialog is dismissed
  //       $("#myModal a.btn").off("click");
  //   });
    
  //   $("#myModal").on("hidden", function() {  // remove the actual elements from the DOM when fully hidden
  //       $("#myModal").remove();
  //   });
    
  //   $("#myModal").modal({                    // wire up the actual modal functionality and show the dialog
  //     "backdrop"  : "static",
  //     "keyboard"  : true,
  //     "show"      : true                     // ensure the modal is shown immediately
  //   });








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
      $('.btn-primary').off();
      if (userScore > computerScore) {
        setTimeout(function() {
          $('#msg').empty();
          $('#myModal').modal('show');
          $('#rounds').html('You win! Play again?');
          $('.btn-primary').addClass('btn-hide slideDown');
          $('.btn-success').removeClass('btn-hide');
          rounds = 0;
          computerScore = 0;
          userScore = 0;
        }, 1000);

      } else if (computerScore > userScore) {
        setTimeout(function() {
          $('#msg').empty();
          bootbox.alert('You lose!');
          $('#rounds').html('You lose! Play again?');
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
          $('#rounds').html('It\'s a tie!');
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
  
  // Leaderboard ============================================================================================================

  var LEADERBOARD_SIZE = 5;

  // Create our Firebase reference
  var scoreListRef = new Firebase('https://sizzling-heat-1941.firebaseio.com');

  // Keep a mapping of firebase locations to HTML elements, so we can move / remove elements as necessary.
  var htmlForPath = {};

  // Helper function that takes a new score snapshot and adds an appropriate row to our leaderboard table.
  function handleScoreAdded(scoreSnapshot, prevScoreName) {
    var newScoreRow = $("<tr/>");
    newScoreRow.append($("<td/>").append($("<em/>").text(scoreSnapshot.val().name)));
    newScoreRow.append($("<td/>").text(scoreSnapshot.val().score));

    // Store a reference to the table row so we can get it again later.
    htmlForPath[scoreSnapshot.key()] = newScoreRow;

    // Insert the new score in the appropriate place in the table.
    if (prevScoreName === null) {
      $("#leaderboardTable").append(newScoreRow);
    }
    else {
      var lowerScoreRow = htmlForPath[prevScoreName];
      lowerScoreRow.before(newScoreRow);
    }
  }

  // Helper function to handle a score object being removed; just removes the corresponding table row.
  function handleScoreRemoved(scoreSnapshot) {
    var removedScoreRow = htmlForPath[scoreSnapshot.key()];
    removedScoreRow.remove();
    delete htmlForPath[scoreSnapshot.key()];
  }

  // Create a view to only receive callbacks for the last LEADERBOARD_SIZE scores
  var scoreListView = scoreListRef.limitToLast(LEADERBOARD_SIZE);

  // Add a callback to handle when a new score is added.
  scoreListView.on('child_added', function (newScoreSnapshot, prevScoreName) {
    handleScoreAdded(newScoreSnapshot, prevScoreName);
  });

  // Add a callback to handle when a score is removed
  scoreListView.on('child_removed', function (oldScoreSnapshot) {
    handleScoreRemoved(oldScoreSnapshot);
  });

  // Add a callback to handle when a score changes or moves positions.
  var changedCallback = function (scoreSnapshot, prevScoreName) {
    handleScoreRemoved(scoreSnapshot);
    handleScoreAdded(scoreSnapshot, prevScoreName);
  };
  scoreListView.on('child_moved', changedCallback);
  scoreListView.on('child_changed', changedCallback);

  // When the user presses enter on scoreInput, add the score, and update the highest score.
  $("#scoreInput").keypress(function (e) {
    if (e.keyCode == 13) {
      var newScore = Number($("#scoreInput").val());
      var name = $("#nameInput").val();
      $("#scoreInput").val("");

      if (name.length === 0)
        return;

      var userScoreRef = scoreListRef.child(name);

      // Use setWithPriority to put the name / score in Firebase, and set the priority to be the score.
      userScoreRef.setWithPriority({ name:name, score:newScore }, newScore);
    }
  });





});