$(document).ready(function() {

  var questionCount = 0, correctAnswers = 0, incorrectAnswers = 0, unanswered = 0, countdown = 13;
  var correct = false;
  $(".results").hide();
  $(".questions-and-answers").hide();

  var game = {
    "questions": [
      {
        "question": "Who directed the epic historical drama Schindler's List in 1993?",
        "choices": ["Martin Scorsese", "Steven Spiellberg", "Clint Eastwood", "Quentin Tarantino"],
        "answer": "Steven Spiellberg"
      },
      {
        "question": "What is the name of the hobbit played by Elijah Wood in the Lord of the Rings movies?",
        "choices": ["Bingo Bobbins", "Grouncho Bigsy", "Gandolf", "Frodo Baggins"],
        "answer": "Frodo Baggins"
      },
      {
        "question": "Which 1952 musical comedy tells the story of three performers making the transition from silent movies to 'talkies'?",
        "choices": ["The Jazz Singer", "The Wizard of Oz", "Sound of Music", "Singin' in the Rain"],
        "answer": "Singin' in the Rain"
      },
      {
        "question": "In the 2016 American fantasy adventure film, 'The Jungle Book', what is the name of the orphaned human boy?",
        "choices": ["Mowgli", "Bill", "Tarzan", "Baboo"],
        "answer": "Mowgli"
      },
      {
        "question": "In the movie 'The Wizard of Oz', what did the Scarecrow want from the wizard?",
        "choices": ["A heart", "A brain", "A smoke", "A girlfriend"],
        "answer": "A brain"
      },
      {
        "question": "Who played the female lead role in the 1986 sci-fi movie 'Aliens'?",
        "choices": ["Nicole Kidman", "Salma Hayek", "Halle Berry", "Sigourney Weaver"],
        "answer": "Sigourney Weaver"
      },
      {
        "question": "Which actor played the main character in the 1990 film 'Edward Scissorhands'?",
        "choices": ["Johnny Depp", "Edward Norton", "Michael Keaton", "Samuel L. Jackson"],
        "answer": "Johnny Depp"
      },
      {
        "question": "What did the famous Hollywood sign, located in Los Angeles, originally say?",
        "choices": ["Welcome", "Holywood", "Hollywoodland", "Da Wood"],
        "answer": "Hollywoodland"
      },
      {
        "question": "In what year was the first Harry Potter movie released?",
        "choices": ["2001", "2002", "2004", "2005"],
        "answer": "2001"
      },
      {
        "question": "When adjusted for inflation, which is the highest grossing film of all time?",
        "choices": ["Titanic", "Avatar", "Gone with the Wind", "Star Wars"],
        "answer": "Gone with the Wind"
      }
    ],
  };


  // STARTS GAME
  function start() {
  	askQuestion(questionCount);
  	counter = setInterval(countDownToNextQuestion,1000);
  }

  function results() {
    $(".questions-and-answers").hide();
    $(".qa-choices").hide();
    $(".game-results").show();
    $(".correct").html("Correctly Answered: " + correctAnswers);
  	$(".incorrect").html("Wrongly Answered: " + incorrectAnswers);
  	$(".unanswered").html("Unanswered: " + unanswered);

  	// DEBUG
  	console.log("Correctly answered: " + correctAnswers);
  	console.log("Incorrectly answered: " + incorrectAnswers);
  	console.log("Unanswered: " + unanswered);
  }

  // DISPLAY QUESTIONS
  function askQuestion(questionCount) {
  	countdown = 15;
  	$(".questions-and-answers").show();
  	if(questionCount < 10) {
  		console.log(game.questions[questionCount].question);
  		$(".qa-question").html(game.questions[questionCount].question);

  		// DISPLAY CHOICES
  		$("#a").html(game.questions[questionCount].choices[0]);
  		$("#b").html(game.questions[questionCount].choices[1]);
  		$("#c").html(game.questions[questionCount].choices[2]);
  		$("#d").html(game.questions[questionCount].choices[3]);
  	}
    else {
  		clearInterval(counter);
  		results();
  	}
  }

  // CHECK IF ANSWER IS CORRECT
  function checkIfCorrect(guessed) {
  	if( guessed === game.questions[questionCount].answer) {
  		return true;
  	}
  	else {
  		return false;
  	}
  }

  // START GAME BUTTON
  $(".start-button").on("click", function(){
  		$(".start-button").hide();
  		questionCount = 0, correctAnswers = 0, incorrectAnswers = 0, unanswered = 0, countdown = 13;
  		start();
  });

  // CHECK IF USER GUESS IS CORRECT
  $(".qa-choices").on("click", function(){
  	if (checkIfCorrect($(this).html()) === true) {
  		correctAnswers++;
  		questionCount++;
  		askQuestion(questionCount);
  	}
  	else if (checkIfCorrect($(this).html()) === false){
  		incorrectAnswers++;
  		questionCount++;
  		askQuestion(questionCount);
  	}
  });

  function countDownToNextQuestion() {
  	countdown--;
      $("#timer").html('<h4>Time Remaining: ' + countdown + ' seconds</h4>');
      if (countdown === 0){

          // STOP COUNTDOWN
          clearInterval(counter);

          // TIME IS UP
          unanswered++;
          console.log(" # of Unanswered: " + unanswered);
          console.log('Time Up!')

          // UPDATE COUNT
          questionCount++;

          // DISPLAY RESULTS IF ALL QUESTIONS HAVE BEEN ASKED
          if ( questionCount == 10 ) {
          	clearInterval(counter);
          	results();
          }
          else {
  	        askQuestion(questionCount);

  	        // UPDATE TIMER
  	        countdown = 15;

  	        counter = setInterval(countDownToNextQuestion,1000);
          }
      }
    }

});
