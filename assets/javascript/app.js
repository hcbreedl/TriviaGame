$( document ).ready(function() {
	console.log("ready!");

var gameOver = $('<button id="gameOver" type="button" class="btn btn-default btn-lg btn-block">Oop! You ran out of time!<br>Click to start over!</button>');

var q1 = $('<div id="button" type="button" class="btn btn-primary btn-lg btn-block">Is Houston Awesome?</div>');
var a1 = $('<button id="button" type="button" class="btn btn-default btn-lg btn-block">NOPE!</button>');
var a2 = $('<button id="button" type="button" class="btn btn-default btn-lg btn-block">Of Course!</button>');
var a3 = $('<button id="button" type="button" class="btn btn-default btn-lg btn-block">Just a little awesome...</button>');
var a4 = $('<button id="button" type="button" class="btn btn-default btn-lg btn-block">Who is Houston?</button>');

var q2 = $('<div id="button" type="button" class="btn btn-primary btn-lg btn-block">How old is Houston?</div>');
var a5 = $('<button id="button" type="button" class="btn btn-default btn-lg btn-block">26</button>');
var a6 = $('<button id="button" type="button" class="btn btn-default btn-lg btn-block">100</button>');
var a7 = $('<button id="button" type="button" class="btn btn-default btn-lg btn-block">He is just a baby right?</button>');
var a8 = $('<button id="button" type="button" class="btn btn-default btn-lg btn-block">I don\'t know!</button>');

var q3 = $('<div id="button" type="button" class="btn btn-primary btn-lg btn-block">This is the third question</div>');
var a9 = $('<button id="button" type="button" class="btn btn-default btn-lg btn-block">This is the first answer</button>');
var a10 = $('<button id="button" type="button" class="btn btn-default btn-lg btn-block">This is the second answer</button>');
var a11 = $('<button id="button" type="button" class="btn btn-default btn-lg btn-block">THIS is the third answer</button>');
var a12 = $('<button id="button" type="button" class="btn btn-default btn-lg btn-block">This is the fourth answer</button>');


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

function question1 () {
	$('#startButton').remove();
	$('#title').append(q1.hide().fadeIn(1000))
	$('#title').append(a1.hide().fadeIn(2000));
	$('#title').append(a2.hide().fadeIn(2500));
	$('#title').append(a3.hide().fadeIn(3000));
	$('#title').append(a4.hide().fadeIn(3500));
	decrement();
	run();

	// The correct answer turns green.
	$(a2).on('click', function() {
		a2.css( "background-color", "#00b796" ).css( "color", "white" );
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
		a1.css( "background-color", "rgba(255, 0, 0, 0.5)" ).css( "color", "white" );
	});
	$(a3).on('click', function() {
		a3.css( "background-color", "rgba(255, 0, 0, 0.5)" ).css( "color", "white" );
	});
	$(a4).on('click', function() {
		a4.css( "background-color", "rgba(255, 0, 0, 0.5)" ).css( "color", "white" );
	});
};

function question2 () {
	timerReset();
	decrement();
	run();

	$('#title').append(q2.hide().fadeIn(1000))
	$('#title').append(a5.hide().fadeIn(2000));
	$('#title').append(a6.hide().fadeIn(2500));
	$('#title').append(a7.hide().fadeIn(3000));
	$('#title').append(a8.hide().fadeIn(3500));

	// The correct answer turns green.
	$(a5).on('click', function() {

		a5.css( "background-color", "#00b796" ).css( "color", "white" );
		
		a8.remove();
		a7.remove();
		a6.remove();
		a5.fadeOut(1000);
		q2.fadeOut(1000);

		question3();
		stop();
	});

	// The incorrect answers turn red.
	$(a6).on('click', function() {
		a6.css( "background-color", "rgba(255, 0, 0, 0.5)" ).css( "color", "white" );
	});	
	$(a7).on('click', function() {
		a7.css( "background-color", "rgba(255, 0, 0, 0.5)" ).css( "color", "white" );
	});

	$(a8).on('click', function() {
		a8.css( "background-color", "rgba(255, 0, 0, 0.5)" ).css( "color", "white" );
	});
		
}

function question3 () {
	timerReset();

	$('#startButton').remove();
	$('#title').append(q3.hide().fadeIn(1000))
	$('#title').append(a9.hide().fadeIn(2000));
	$('#title').append(a10.hide().fadeIn(2500));
	$('#title').append(a11.hide().fadeIn(3000));
	$('#title').append(a12.hide().fadeIn(3500));
	timer();

	// The correct answer turns green.
	$(a11).on('click', function() {
		a11.css( "background-color", "#00b796" ).css( "color", "white" );

		a12.remove();
		a10.remove();
		a9.remove();
		a11.fadeOut(1000);
		q1.fadeOut(1000);
		
		// question4();
	});

	//The incorrect answers turn red.
	$(a9).on('click', function() {	
		a9.css( "background-color", "rgba(255, 0, 0, 0.5)" ).css( "color", "white" );
	});
	$(a10).on('click', function() {
		a10.css( "background-color", "rgba(255, 0, 0, 0.5)" ).css( "color", "white" );
	});
	$(a12).on('click', function() {
		a12.css( "background-color", "rgba(255, 0, 0, 0.5)" ).css( "color", "white" );
	});
};

// First questions load
$('#startButton').on('click', function() {
	question1();
});


}); // End of document ready function