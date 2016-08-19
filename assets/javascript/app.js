$( document ).ready(function() {
	console.log("ready!");

var correctAnswers = 0;
var incorrectAnswers = 0;
var gameOver = $('<button id="gameOver" type="button" class="btn btn-default btn-lg btn-block">Oops! You ran out of time!<br>Click to start over!</button>');
var youWin = $('<div id="title" class="last col-xs-12"></div>');
var startButton = $('<button id="startButton" type="button" class="btn btn-primary btn-lg btn-block">Click to Start</button>');
var goodJob = $('<div id="goodJob">Good Job!</div>');
var badJob = $('<div id="badJob">Wrong!</div>');

var q1 = $('<div id="button" type="button" class="btn btn-primary btn-lg btn-block"></div>');
var a1 = $('<button id="button" type="button" class="btn btn-default btn-lg btn-block"></button>');
var a2 = $('<button id="button" type="button" class="btn btn-default btn-lg btn-block"></button>');
var a3 = $('<button id="button" type="button" class="btn btn-default btn-lg btn-block"></button>');
var a4 = $('<button id="button" type="button" class="btn btn-default btn-lg btn-block"></button>');

number = 21;


function run(){
    counter = setInterval(decrement, 1000);
}

function decrement(){

	number--;
    $('#timer').html('<h2>' + number + '</h2>');
	    if (number === 0) {
	    	
	    	stop();
	    	$('#timer').html('<h2>00</h2>')
	
	        $('#button').remove();
	        $('.btn').remove();
	        $('#title').append(gameOver).fadeIn(1000);
	        $(gameOver).on('click', function() {
	        	number = 21;
	        	gameOver.remove();
	        	question1();
	    	})
	    }
}

function timerReset() {
	number = 21;
	run();
}

function stop(){
    clearInterval(counter);
}

function resetColor() {
	$(a1).css('color', 'black');
	$(a2).css('color', 'black');
	$(a3).css('color', 'black');
	$(a4).css('color', 'black');
}

function removeAll() {
	a4.remove();
	a3.remove();
	a2.remove();
	a1.remove();
	q1.remove();
}

function fadeInChoices() {
	$('#title').append(q1.hide().fadeIn(1000))
	$('#title').append(a1.hide().fadeIn(2000));
	$('#title').append(a2.hide().fadeIn(2500));
	$('#title').append(a3.hide().fadeIn(3000));
	$('#title').append(a4.hide().fadeIn(3500));
}

function correct() {
		correctAnswers = correctAnswers + 1;
		console.log("correct: " + correctAnswers);
		console.log("incorrect: " + incorrectAnswers);
		awesome = setTimeout(wellDone, 100);
		function wellDone() {
		$('#title').append(goodJob);
		goodJob.fadeIn('fast');
		};

		awesomeAway = setTimeout(wellDoneBye, 1000);
		function wellDoneBye() {
		goodJob.fadeOut(1000);
		};
}

function incorrect() {
		incorrectAnswers = incorrectAnswers + 1;
		console.log("correct: " + correctAnswers);
		console.log("incorrect: " + incorrectAnswers);
		notAwesome = setTimeout(notWellDone, 100);
		function notWellDone() {
		$('#title').append(badJob);
		badJob.fadeIn('fast');
		};

		Away = setTimeout(DoneBye, 1000);
		function DoneBye() {
		badJob.fadeOut(1000);
		};
}


// First questions load
$('#startButton').on('click', function() {
	question1();
});

function question1 () {

	$('#startButton').remove();

	resetColor();

	$(q1).html("Who were the founders of Apple Computer Inc.?");
	$(a1).html("Jennifer Aniston and Monica Lewinski");
	$(a2).html("Steve Jobs, Steve Wosniak, and Ronald Wayne");
	$(a3).html("Barack Obama and John Mayer");
	$(a4).html("Nick Bartlett?");

	fadeInChoices()

	decrement();
	run();

	// The correct answer turns green.
	$(a2).on('click', function() {	
		stop();	
		removeAll();
		correct();
		q2 = setTimeout(question2, 2000);
	});

	//The incorrect answers turn red.
	$(a1).on('click', function() {	
		stop();
		removeAll();
		incorrect();
		q2 = setTimeout(question2, 2000);
	});
	$(a3).on('click', function() {
		stop();
		removeAll();
		incorrect();
		q2 = setTimeout(question2, 2000);
	});
	$(a4).on('click', function() {
		stop();
		removeAll();
		incorrect();
		q2 = setTimeout(question2, 2000);
	});
};

function question2 () {
	timerReset();

	resetColor();

	$(q1).html("How much was the first Apple computer?");
	$(a1).html("$100");
	$(a2).html("$1000");
	$(a3).html("$666.66");
	$(a4).html("I don\'t know!");

	fadeInChoices()

	// The correct answer turns green.
	$(a3).on('click', function() {
		stop();
		removeAll();
		correct();
		q3 = setTimeout(question3, 2000);
	});

	//The incorrect answers turn red.
	$(a1).on('click', function() {	
		stop();
		removeAll();
		incorrect();
		q3 = setTimeout(question3, 2000);
	});
	$(a2).on('click', function() {
		stop();
		removeAll();
		incorrect();
		q3 = setTimeout(question3, 2000);
	});
	$(a4).on('click', function() {
		stop();
		removeAll();
		incorrect();
		q3 = setTimeout(question3, 2000);
	});
}

function question3 () {
	timerReset();

	resetColor();

	$(q1).html("Which Apple store was the most expensive to build?");
	$(a1).html("The one in at SouthPoint");
	$(a2).html("The one is Hawaii");
	$(a3).html("The one at the North Pole");
	$(a4).html("The one in Manhattan");

	fadeInChoices()

	// The correct answer turns green.
	$(a4).on('click', function() {
		stop();
		removeAll();
		correct();
		q4 = setTimeout(question4, 2000);
	});

	//The incorrect answers turn red.
	$(a1).on('click', function() {	
		stop();
		removeAll();
		incorrect();
		q4 = setTimeout(question4, 2000);
	});
	$(a2).on('click', function() {
		stop();
		removeAll();
		incorrect();
		q4 = setTimeout(question4, 2000);
	});
	$(a3).on('click', function() {
		stop();
		removeAll();
		incorrect();
		q4 = setTimeout(question4, 2000);
	});
}

function question4 () {
	timerReset();

	resetColor();

	$(q1).html("How many US states don't have an Apple store?");
	$(a1).html("9");
	$(a2).html("They all have one");
	$(a3).html("Less than half of America");
	$(a4).html("Only Alaska doesn't have one");

	fadeInChoices()

	// The correct answer turns green.
	$(a1).on('click', function() {
		stop();
		removeAll();
		correct();
		q5 = setTimeout(question5, 2000);
	});

	//The incorrect answers turn red.
	$(a4).on('click', function() {	
		stop();
		removeAll();
		incorrect();
		q5 = setTimeout(question5, 2000);
	});
	$(a2).on('click', function() {
		stop();
		removeAll();
		incorrect();
		q5 = setTimeout(question5, 2000);
	});
	$(a3).on('click', function() {
		stop();
		removeAll();
		incorrect();
		q5 = setTimeout(question5, 2000);
	});
}

function question5 () {
	timerReset();

	resetColor();

	$(q1).html("Why was the Lisa computer given its name?");
	$(a1).html("It was named after Steve Jobs' former lover");
	$(a2).html("It was named after Steve Jobs' daughter");
	$(a3).html("It was named after Lisa Stefanopolis");
	$(a4).html("I don't even know what that computer is...");

	fadeInChoices()

	// The correct answer turns green.
	$(a2).on('click', function() {
		stop();
		removeAll();
		correct();
		q6 = setTimeout(question6, 2000);
	});

	//The incorrect answers turn red.
	$(a4).on('click', function() {	
		stop();
		removeAll();
		incorrect();
		
		q6 = setTimeout(question6, 2000);
	});
	$(a1).on('click', function() {
		stop();
		removeAll();
		incorrect();
		
		q6 = setTimeout(question6, 2000);
	});
	$(a3).on('click', function() {
		stop();
		removeAll();
		incorrect();
		
		q6 = setTimeout(question6, 2000);
	});
}

function question6 () {
	timerReset();

	resetColor();

	$(q1).html("What year was the original Ipod released?");
	$(a1).html("1970");
	$(a2).html("1999");
	$(a3).html("2000");
	$(a4).html("2001");

	fadeInChoices()

	// The correct answer turns green.
	$(a4).on('click', function() {
		stop();
		removeAll();
		correct();
		
		q7 = setTimeout(question7, 2000);
	});

	//The incorrect answers turn red.
	$(a2).on('click', function() {	
		stop();
		removeAll();
		incorrect();
		
		q7 = setTimeout(question7, 2000);
	});
	$(a1).on('click', function() {
		stop();
		removeAll();
		incorrect();
		
		q7 = setTimeout(question7, 2000);
	});
	$(a3).on('click', function() {
		stop();
		removeAll();
		incorrect();
		
		q7 = setTimeout(question7, 2000);
	});
}

function question7 () {
	timerReset();

	resetColor();

	$(q1).html("How many songs could the first Ipod hold?");
	$(a1).html("27");
	$(a2).html("100");
	$(a3).html("1000");
	$(a4).html("50");

	fadeInChoices()

	// The correct answer turns green.
	$(a3).on('click', function() {
		stop();
		removeAll();
		correct();
		
		q8 = setTimeout(question8, 2000);
	});

	//The incorrect answers turn red.
	$(a2).on('click', function() {	
		stop();
		removeAll();
		incorrect();
		
		q8 = setTimeout(question8, 2000);
	});
	$(a1).on('click', function() {
		stop();
		removeAll();
		incorrect();
		
		q8 = setTimeout(question8, 2000);
	});
	$(a4).on('click', function() {
		stop();
		removeAll();
		incorrect();
		
		q8 = setTimeout(question8, 2000);
	});
}

function question8 () {
	timerReset();

	resetColor();

	$(q1).html("Before co-founding Apple, where did Steve Jobs work?");
	$(a1).html("Atari");
	$(a2).html("McDonals");
	$(a3).html("IBM");
	$(a4).html("Burger King");

	fadeInChoices()

	// The correct answer turns green.
	$(a1).on('click', function() {
		stop();
		removeAll();
		correct();
		
		q9 = setTimeout(question9, 2000);
	});

	//The incorrect answers turn red.
	$(a2).on('click', function() {	
		stop();
		removeAll();
		incorrect();
		
		q9 = setTimeout(question9, 2000);
	});
	$(a3).on('click', function() {
		stop();
		removeAll();
		incorrect();
		
		q9 = setTimeout(question9, 2000);
	});
	$(a4).on('click', function() {
		stop();
		removeAll();
		incorrect();
		
		q9 = setTimeout(question9, 2000);
	});
}

function question9 () {
	timerReset();

	resetColor();

	$(q1).html("What religious practices did Steve Jobs hold?");
	$(a1).html("Christianity");
	$(a2).html("Buddhism");
	$(a3).html("Muslim");
	$(a4).html("Taoism");

	fadeInChoices()

	// The correct answer turns green.
	$(a2).on('click', function() {
		stop();
		removeAll();
		correct();
		
		q10 = setTimeout(question10, 2000);
	});

	//The incorrect answers turn red.
	$(a1).on('click', function() {	
		stop();
		removeAll();
		incorrect();
		
		q10 = setTimeout(question10, 2000);
	});
	$(a3).on('click', function() {
		stop();
		removeAll();
		incorrect();
		
		q10 = setTimeout(question10, 2000);
	});
	$(a4).on('click', function() {
		stop();
		removeAll();
		incorrect();
		
		q10 = setTimeout(question10, 2000);
	});
}

function question10 () {
	timerReset();

	resetColor();

	$(q1).html("What was Apple's first slogan?");
	$(a1).html("Apple is the Best");
	$(a2).html("Computers! Computers! Computer!");
	$(a3).html("Byte into a Pear");
	$(a4).html("Byte into an Apple");

	fadeInChoices()

	// Clicking the correct answer
	$(a4).on('click', function() {
		
		stop();
		$('#timer').html('<h2>00</h2>');
		correctAnswers++;
		removeAll();
		
		$('#title').append(youWin);
		$(youWin).html('<p>Thanks for playing!<br>Correct Answers: ' + correctAnswers + ' <br>Incorrect Answers: ' + incorrectAnswers + '<br>Play Again?</p>');
		$('#title').append(startButton);
		
		$('#startButton').on('click', function() {
			$(startButton).remove();
			$(youWin).remove();
			number = 21;
			$('#timer').html('<h2>00</h2>');
			correctAnswers = 0;
			incorrectAnswers = 0;
			question1();
		})
	});

	//The incorrect answers turn red.
	$(a1).on('click', function() {	
		stop();
		$('#timer').html('<h2>00</h2>');
		
		removeAll();
		incorrectAnswers++;
		$('#title').append(youWin);
		$(youWin).html('<p>Thanks for playing!<br>Correct Answers: ' + correctAnswers + ' <br>Incorrect Answers: ' + incorrectAnswers + '<br>Play Again?</p>');

		$('#title').append(startButton);
		
		$('#startButton').on('click', function() {
			$(startButton).remove();
			$(youWin).remove();
			number = 21;
			$('#timer').html('<h2>00</h2>');
			correctAnswers = 0;
			incorrectAnswers = 0;
			question1();
		})
	});
	$(a3).on('click', function() {
		stop();
		$('#timer').html('<h2>00</h2>');
		
		removeAll();
		incorrectAnswers++;
		$('#title').append(youWin);
		$(youWin).html('<p>Thanks for playing!<br>Correct Answers: ' + correctAnswers + ' <br>Incorrect Answers: ' + incorrectAnswers + '<br>Play Again?</p>');
		$('#title').append(startButton);
		
		$('#startButton').on('click', function() {
			$(startButton).remove();
			$(youWin).remove();
			number = 21;
			$('#timer').html('<h2>00</h2>');
			correctAnswers = 0;
			incorrectAnswers = 0;
			question1();
		})
	});
	$(a2).on('click', function() {
		stop();
		$('#timer').html('<h2>00</h2>');
		
		removeAll();
		incorrectAnswers++;
		$('#title').append(youWin);
		$(youWin).html('<p>Thanks for playing!<br>Correct Answers: ' + correctAnswers + ' <br>Incorrect Answers: ' + incorrectAnswers + '<br>Play Again?</p>');
		$('#title').append(startButton);
		
		$('#startButton').on('click', function() {
			$(startButton).remove();
			$(youWin).remove();
			number = 21;
			$('#timer').html('<h2>00</h2>');
			correctAnswers = 0;
			incorrectAnswers = 0;
			question1();
		})
	});
}










}); // End of document ready function