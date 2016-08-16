$( document ).ready(function() {
	console.log("ready!");

var gameOver = $('<button id="gameOver" type="button" class="btn btn-default btn-lg btn-block">Oop! You ran out of time!<br>Click to start over!</button>');

var q1 = $('<div id="button" type="button" class="btn btn-primary btn-lg btn-block"></div>');
var a1 = $('<button id="button" type="button" class="btn btn-default btn-lg btn-block"></button>');
var a2 = $('<button id="button" type="button" class="btn btn-default btn-lg btn-block"></button>');
var a3 = $('<button id="button" type="button" class="btn btn-default btn-lg btn-block"></button>');
var a4 = $('<button id="button" type="button" class="btn btn-default btn-lg btn-block"></button>');

/*
	number = 21;
	function run(){
	    counter = setInterval(decrement, 1000);
	}
	function decrement(){
	    number--;
	    $('#timer').html('<h2>' + number + '</h2>');
	    if (number === 0) {
	    	$('#timer').remove();
	        // alert('Time Up!')
	        $('#button').remove();
	        $('.btn').remove();
	        $('#title').append(gameOver).fadeIn(1000);
	        $(gameOver).on('click', function() {
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
*/

// First questions load
$('#startButton').on('click', function() {
	question1();
});

function question1 () {
	$('#startButton').remove();

	$(q1).html("Is Houston awesome?");
	$(a1).html("Nope!");
	$(a2).html("Of Course!");
	$(a3).html("Just a little awesome...");
	$(a4).html("Who is Houston?");

	$('#title').append(q1.hide().fadeIn(1000))
	$('#title').append(a1.hide().fadeIn(2000));
	$('#title').append(a2.hide().fadeIn(2500));
	$('#title').append(a3.hide().fadeIn(3000));
	$('#title').append(a4.hide().fadeIn(3500));

	// decrement();
	// run();

	// The correct answer turns green.
	$(a2).on('click', function() {
		a2.addClass('correct');
		stop();
		a4.remove();
		a3.remove();
		a1.remove();
		a2.fadeOut(1000);
		q1.fadeOut(1000);
		
		question2();
	});

	//The incorrect answers turn red.
	$(a1).on('click', function() {	
		a1.addClass('incorrect');
	});
	$(a3).on('click', function() {
		a3.addClass('incorrect');
	});
	$(a4).on('click', function() {
		a4.addClass('incorrect');
	});


};

function question2 () {
	$(a1).removeClass('incorrect');
	$(a2).removeClass('correct');
	$(a3).removeClass('incorrect');
	$(a4).removeClass('incorrect');

	$(q1).html("How old is Houston?");
	$(a1).html("100");
	$(a2).html("He is just a baby!");
	$(a3).html("26");
	$(a4).html("I don\'t know!");

	$('#title').append(q1.hide().fadeIn(1000))
	$('#title').append(a1.hide().fadeIn(2000));
	$('#title').append(a2.hide().fadeIn(2500));
	$('#title').append(a3.hide().fadeIn(3000));
	$('#title').append(a4.hide().fadeIn(3500));

	// The correct answer turns green.
	$(a3).on('click', function() {
		a3.addClass('correct')
		stop();
		a4.remove();
		a2.remove();
		a1.remove();
		a3.fadeOut(1000);
		q1.fadeOut(1000);
		
		question3();
	});

	//The incorrect answers turn red.
	$(a1).on('click', function() {	
		a1.addClass('incorrect');
	});
	$(a2).on('click', function() {
		a2.addClass('incorrect');
	});
	$(a4).on('click', function() {
		a4.addClass('incorrect');
	});
}

function question3 () {
	$(a1).removeClass('incorrect');
	$(a2).removeClass('incorrect');
	$(a3).removeClass('correct');
	$(a4).removeClass('incorrect');

	$(q1).html("This is question 3");
	$(a1).html("answer1");
	$(a2).html("answer2");
	$(a3).html("answer3");
	$(a4).html("answer4");

	$('#title').append(q1.hide().fadeIn(1000))
	$('#title').append(a1.hide().fadeIn(2000));
	$('#title').append(a2.hide().fadeIn(2500));
	$('#title').append(a3.hide().fadeIn(3000));
	$('#title').append(a4.hide().fadeIn(3500));

	// The correct answer turns green.
	$(a4).on('click', function() {
		a4.addClass('correct')
		stop();
		a3.remove();
		a2.remove();
		a1.remove();
		a4.fadeOut(1000);
		q1.fadeOut(1000);
		
		question4();
	});

	//The incorrect answers turn red.
	$(a1).on('click', function() {	
		a1.addClass('incorrect');
	});
	$(a2).on('click', function() {
		a2.addClass('incorrect');
	});
	$(a3).on('click', function() {
		a3.addClass('incorrect');
	});
}

function question4 () {
	$(a1).removeClass('incorrect');
	$(a2).removeClass('incorrect');
	$(a3).removeClass('incorrect');
	$(a4).removeClass('correct');

	$(q1).html("This is question 4");
	$(a1).html("answer1");
	$(a2).html("answer2");
	$(a3).html("answer3");
	$(a4).html("answer4");

	$('#title').append(q1.hide().fadeIn(1000))
	$('#title').append(a1.hide().fadeIn(2000));
	$('#title').append(a2.hide().fadeIn(2500));
	$('#title').append(a3.hide().fadeIn(3000));
	$('#title').append(a4.hide().fadeIn(3500));

	// The correct answer turns green.
	$(a1).on('click', function() {
		a1.addClass('correct')
		stop();
		a4.remove();
		a3.remove();
		a2.remove();
		a1.fadeOut(1000);
		q1.fadeOut(1000);
		
		question4();
	});

	//The incorrect answers turn red.
	$(a4).on('click', function() {	
		a4.addClass('incorrect');
	});
	$(a2).on('click', function() {
		a2.addClass('incorrect');
	});
	$(a3).on('click', function() {
		a3.addClass('incorrect');
	});
}







}); // End of document ready function