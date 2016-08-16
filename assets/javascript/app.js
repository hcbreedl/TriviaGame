$( document ).ready(function() {
	console.log("ready!");

var gameOver = $('<button id="gameOver" type="button" class="btn btn-default btn-lg btn-block">Oops! You ran out of time!<br>Click to start over!</button>');
var youWin = $('<div id="title" class="col-xs-12"><h1 id="h1">You Win!<br>Play Again?</h1></div>');
var startButton = $('<button id="startButton" type="button" class="btn btn-primary btn-lg btn-block">Click to Start</button>');

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
	        	timerReset();
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


// First questions load
$('#startButton').on('click', function() {
	question1();
});

function question1 () {

	$('#startButton').remove();

	resetColor();

	$(q1).html("Is Houston awesome?");
	$(a1).html("Nope!");
	$(a2).html("Of Course!");
	$(a3).html("Just a little awesome...");
	$(a4).html("Who is Houston?");

	fadeInChoices()

	decrement();
	run();

	// The correct answer turns green.
	$(a2).on('click', function() {
		
		stop();
		
		removeAll();
		
		// question2();
		question10();
	});

	//The incorrect answers turn red.
	$(a1).on('click', function() {	
		a1.css('color', 'red');
	});
	$(a3).on('click', function() {
		a3.css('color', 'red');
	});
	$(a4).on('click', function() {
		a4.css('color', 'red');
	});
};

// function question2 () {
// 	timerReset();

// 	resetColor();

// 	$(q1).html("How old is Houston?");
// 	$(a1).html("100");
// 	$(a2).html("He is just a baby!");
// 	$(a3).html("26");
// 	$(a4).html("I don\'t know!");

// 	fadeInChoices()

// 	// The correct answer turns green.
// 	$(a3).on('click', function() {
		
// 		stop();
// 		removeAll();
		
// 		question3();
// 	});

// 	//The incorrect answers turn red.
// 	$(a1).on('click', function() {	
// 		a1.css('color', 'red');
// 	});
// 	$(a2).on('click', function() {
// 		a2.css('color', 'red');
// 	});
// 	$(a4).on('click', function() {
// 		a4.css('color', 'red');
// 	});
// }

// function question3 () {
// 	timerReset();

// 	resetColor();

// 	$(q1).html("This is question 3");
// 	$(a1).html("answer1");
// 	$(a2).html("answer2");
// 	$(a3).html("answer3");
// 	$(a4).html("answer4- Correct");

// 	fadeInChoices()

// 	// The correct answer turns green.
// 	$(a4).on('click', function() {
// 		a4.addClass('correct')
// 		stop();
// 		removeAll();
		
// 		question4();
// 	});

// 	//The incorrect answers turn red.
// 	$(a1).on('click', function() {	
// 		a1.css('color', 'red');
// 	});
// 	$(a2).on('click', function() {
// 		a2.css('color', 'red');
// 	});
// 	$(a3).on('click', function() {
// 		a3.css('color', 'red');
// 	});
// }

// function question4 () {
// 	timerReset();

// 	resetColor();

// 	$(q1).html("This is question 4");
// 	$(a1).html("answer1- Correct");
// 	$(a2).html("answer2");
// 	$(a3).html("answer3");
// 	$(a4).html("answer4");

// 	fadeInChoices()

// 	// The correct answer turns green.
// 	$(a1).on('click', function() {
// 		a1.addClass('correct')
// 		stop();
// 		removeAll();
		
// 		question5();
// 	});

// 	//The incorrect answers turn red.
// 	$(a4).on('click', function() {	
// 		a4.css('color', 'red');
// 	});
// 	$(a2).on('click', function() {
// 		a2.css('color', 'red');
// 	});
// 	$(a3).on('click', function() {
// 		a3.css('color', 'red');
// 	});
// }

// function question5 () {
// 	timerReset();

// 	resetColor();

// 	$(q1).html("This is question 5");
// 	$(a1).html("answer1");
// 	$(a2).html("answer2- Correct");
// 	$(a3).html("answer3");
// 	$(a4).html("answer4");

// 	fadeInChoices()

// 	// The correct answer turns green.
// 	$(a2).on('click', function() {
// 		a2.addClass('correct')
// 		stop();
// 		removeAll();
		
// 		question6();
// 	});

// 	//The incorrect answers turn red.
// 	$(a4).on('click', function() {	
// 		a4.css('color', 'red');
// 	});
// 	$(a1).on('click', function() {
// 		a1.css('color', 'red');
// 	});
// 	$(a3).on('click', function() {
// 		a3.css('color', 'red');
// 	});
// }

// function question6 () {
// 	timerReset();

// 	resetColor();

// 	$(q1).html("This is question 6");
// 	$(a1).html("answer1");
// 	$(a2).html("answer2");
// 	$(a3).html("answer3");
// 	$(a4).html("answer4- Correct");

// 	fadeInChoices()

// 	// The correct answer turns green.
// 	$(a4).on('click', function() {
// 		a4.addClass('correct')
// 		stop();
// 		removeAll();
		
// 		question7();
// 	});

// 	//The incorrect answers turn red.
// 	$(a2).on('click', function() {	
// 		a2.css('color', 'red');
// 	});
// 	$(a1).on('click', function() {
// 		a1.css('color', 'red');
// 	});
// 	$(a3).on('click', function() {
// 		a3.css('color', 'red');
// 	});
// }

// function question7 () {
// 	timerReset();

// 	resetColor();

// 	$(q1).html("This is question 7");
// 	$(a1).html("answer1");
// 	$(a2).html("answer2");
// 	$(a3).html("answer3- Correct");
// 	$(a4).html("answer4");

// 	fadeInChoices()

// 	// The correct answer turns green.
// 	$(a3).on('click', function() {
// 		a3.addClass('correct')
// 		stop();
// 		removeAll();
		
// 		question8();
// 	});

// 	//The incorrect answers turn red.
// 	$(a2).on('click', function() {	
// 		a2.css('color', 'red');
// 	});
// 	$(a1).on('click', function() {
// 		a1.css('color', 'red');
// 	});
// 	$(a4).on('click', function() {
// 		a4.css('color', 'red');
// 	});
// }

// function question8 () {
// 	timerReset();

// 	resetColor();

// 	$(q1).html("This is question 8");
// 	$(a1).html("answer1- Correct");
// 	$(a2).html("answer2");
// 	$(a3).html("answer3");
// 	$(a4).html("answer4");

// 	fadeInChoices()

// 	// The correct answer turns green.
// 	$(a1).on('click', function() {
// 		a1.addClass('correct')
// 		stop();
// 		removeAll();
		
// 		question9();
// 	});

// 	//The incorrect answers turn red.
// 	$(a2).on('click', function() {	
// 		a2.css('color', 'red');
// 	});
// 	$(a3).on('click', function() {
// 		a3.css('color', 'red');
// 	});
// 	$(a4).on('click', function() {
// 		a4.css('color', 'red');
// 	});
// }

// function question9 () {
// 	timerReset();

// 	resetColor();

// 	$(q1).html("This is question 9");
// 	$(a1).html("answer1");
// 	$(a2).html("answer2- Correct");
// 	$(a3).html("answer3");
// 	$(a4).html("answer4");

// 	fadeInChoices()

// 	// The correct answer turns green.
// 	$(a2).on('click', function() {
// 		a2.addClass('correct')
// 		stop();
// 		removeAll();
		
// 		question10();
// 	});

// 	//The incorrect answers turn red.
// 	$(a1).on('click', function() {	
// 		a1.css('color', 'red');
// 	});
// 	$(a3).on('click', function() {
// 		a3.css('color', 'red');
// 	});
// 	$(a4).on('click', function() {
// 		a4.css('color', 'red');
// 	});
// }

function question10 () {
	timerReset();

	resetColor();

	$(q1).html("This is question 10");
	$(a1).html("answer1");
	$(a2).html("answer2");
	$(a3).html("answer3");
	$(a4).html("answer4- Correct");

	fadeInChoices()

	// Clicking the correct answer
	$(a4).on('click', function() {
		
		stop();
		$('#timer').html('<h2>00</h2>');
		
		removeAll();
		
		$('#title').append(youWin);
		$('#title').append(startButton);
		
		$('#startButton').on('click', function() {
			$(startButton).remove();
			$(youWin).remove();

			$('#timer').html('<h2>00</h2>');
			question1();
		})
	});

	//The incorrect answers turn red.
	$(a1).on('click', function() {	
		a1.css('color', 'red');
	});
	$(a3).on('click', function() {
		a3.css('color', 'red');
	});
	$(a2).on('click', function() {
		a2.css('color', 'red');
	});
}










}); // End of document ready function