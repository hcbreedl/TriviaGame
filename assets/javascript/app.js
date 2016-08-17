$( document ).ready(function() {
	console.log("ready!");

var gameOver = $('<button id="gameOver" type="button" class="btn btn-default btn-lg btn-block">Oops! You ran out of time!<br>Click to start over!</button>');
var youWin = $('<div id="title" class="col-xs-12"><h1 id="h1">You Win!<br>Play Again?</h1></div>');
var startButton = $('<button id="startButton" type="button" class="btn btn-primary btn-lg btn-block">Click to Start</button>');
var goodJob = $('<div id="goodJob">Good Job!</div>');

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

function goodJob() {
	$('#title').append(goodJob);
	timeoutID = window.setTimeout(removeGoodJob, 1000);
}

function removeGoodJob() {
  goodJob.remove();
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
		
		question2();
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
		
		question3();
	});

	//The incorrect answers turn red.
	$(a1).on('click', function() {	
		a1.css('color', 'red');
	});
	$(a2).on('click', function() {
		a2.css('color', 'red');
	});
	$(a4).on('click', function() {
		a4.css('color', 'red');
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
		a4.addClass('correct')
		stop();
		removeAll();
		
		question4();
	});

	//The incorrect answers turn red.
	$(a1).on('click', function() {	
		a1.css('color', 'red');
	});
	$(a2).on('click', function() {
		a2.css('color', 'red');
	});
	$(a3).on('click', function() {
		a3.css('color', 'red');
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
		a1.addClass('correct')
		stop();
		removeAll();
		
		question5();
	});

	//The incorrect answers turn red.
	$(a4).on('click', function() {	
		a4.css('color', 'red');
	});
	$(a2).on('click', function() {
		a2.css('color', 'red');
	});
	$(a3).on('click', function() {
		a3.css('color', 'red');
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
		a2.addClass('correct')
		stop();
		removeAll();
		
		question6();
	});

	//The incorrect answers turn red.
	$(a4).on('click', function() {	
		a4.css('color', 'red');
	});
	$(a1).on('click', function() {
		a1.css('color', 'red');
	});
	$(a3).on('click', function() {
		a3.css('color', 'red');
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
		a4.addClass('correct')
		stop();
		removeAll();
		
		question7();
	});

	//The incorrect answers turn red.
	$(a2).on('click', function() {	
		a2.css('color', 'red');
	});
	$(a1).on('click', function() {
		a1.css('color', 'red');
	});
	$(a3).on('click', function() {
		a3.css('color', 'red');
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
		a3.addClass('correct')
		stop();
		removeAll();
		
		question8();
	});

	//The incorrect answers turn red.
	$(a2).on('click', function() {	
		a2.css('color', 'red');
	});
	$(a1).on('click', function() {
		a1.css('color', 'red');
	});
	$(a4).on('click', function() {
		a4.css('color', 'red');
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
		a1.addClass('correct')
		stop();
		removeAll();
		
		question9();
	});

	//The incorrect answers turn red.
	$(a2).on('click', function() {	
		a2.css('color', 'red');
	});
	$(a3).on('click', function() {
		a3.css('color', 'red');
	});
	$(a4).on('click', function() {
		a4.css('color', 'red');
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
		a2.addClass('correct')
		stop();
		removeAll();
		
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
		
		removeAll();
		
		$('#title').append(youWin);
		$('#title').append(startButton);
		
		$('#startButton').on('click', function() {
			$(startButton).remove();
			$(youWin).remove();
			number = 21;
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