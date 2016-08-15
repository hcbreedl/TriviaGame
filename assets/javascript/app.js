$( document ).ready(function() {
	console.log("ready!");

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

function timerReset() {
	number = 11;
}
function timer() {
	number = 11;

	function run(){
	    counter = setInterval(decrement, 1000);
	}

	function decrement(){
	    number--;
	    $('#timer').html('<h2>' + number + '</h2>');
	    if (number === 0) {
	    	stop();
	        // alert('Time Up!')
	    }
	}

	function stop(){
            clearInterval(counter);
        }

	run();
}

$('#startButton').on('click', function() {
	$('#startButton').remove();
	$('#title').append(q1.hide().fadeIn(1000))
	$('#title').append(a1.hide().fadeIn(2000));
	$('#title').append(a2.hide().fadeIn(2500));
	$('#title').append(a3.hide().fadeIn(3000));
	$('#title').append(a4.hide().fadeIn(3500));
	timer();

	$(a1).on('click', function() {
		a1.css( "background-color", "rgba(255, 0, 0, 0.5)" ).css( "color", "white" );
	});

	$(a2).on('click', function() {
		a2.css( "background-color", "#00b796" ).css( "color", "white" );
		
		a4.fadeOut(500);
		a3.fadeOut(1500);
		a1.fadeOut(3000);
		a2.fadeOut(8000);
		q1.fadeOut(8000);
		
		timerReset();

		$('#title').append(q2.hide().fadeIn(1000))
		$('#title').append(a5.hide().fadeIn(2000));
		$('#title').append(a6.hide().fadeIn(2500));
		$('#title').append(a7.hide().fadeIn(3000));
		$('#title').append(a8.hide().fadeIn(3500));
	});

	$(a3).on('click', function() {
		a3.css( "background-color", "rgba(255, 0, 0, 0.5)" ).css( "color", "white" );
	});

	$(a4).on('click', function() {
		a4.css( "background-color", "rgba(255, 0, 0, 0.5)" ).css( "color", "white" );
	});
})






















});