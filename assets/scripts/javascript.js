$("#start").on("click", function(){
		game.start();
});

var questions = [{
	question:"Who faithfully served Artorias the Abyss Walker?",
	answers:["Sif, the Great Grey Wolf", "Manus, Father of the Abyss", "Harry Potter", "Lou Bega"],
	correctAnswer: "Sif, the Great Grey Wolf"
}, {
	question:"Who is the guardian of Darkroot Garden?",
	answers:["Andre of Astora", "Alvina", "Big Hat Loga", "Black Dragon Kalameet"],
	correctAnswer: "Alvina"
}, {
	question:"What name does Havel also go by?",
	answers:["Fred the Fierce", "The Rock", "Ted Dibiase", "Seath"],
	correctAnswer:"The Rock"
}, {
	question:"Where do you fight Seath the Scaleless?",
	answers:["The Duke's Archives and the Crystal Cave", "The Firelink Shrine", "The Abyss", "Sen's Fortress"],
	correctAnswer:"The Duke's Archives and the Crystal Cave"
}, {
	question:"What is the title of the main character?",
	answers:["The Chosen Undead", "The Hallowed", "Oathkeeper", "Tim The Maniac Desilvia"],
	correctAnswer:"The Chosen Undead"
}, {
	question:"What is the most well known emote in the game?",
	answers:["Kneel", "Dance", "Bow", "Praise the Sun"],
	correctAnswer:"Praise the Sun"
}, {
	question:"How many 'New Game +' modes are there?",
	answers:["4", "5", "6", "7"],
	correctAnswer:"7"
}];

var game = {
	correct: 0,
	incorrect: 0,
	counter: 120,
	countdown: function() {
		game.counter--;
		$("#counter").html(game.counter);
		if (game.counter <= 0) {
			console.log("Time is up!");
			game.done();
		}
	},
	start: function() {
		timer = setInterval(game.countdown, 1000);
		$("#subwrapper").prepend("<h2>Time Remaining: <span id='counter'>120</span> Seconds</h2>");
		$("#start").remove();
		for (var i = 0; i < questions.length; i++) {
		$("#subwrapper").append("<h2>" + questions[i].question + "</h2>");
		for(var j = 0; j < questions[i].answers.length; j++) {
			$("#subwrapper").append("<input type='radio' name='question-" + i + "' value='" +questions[i].answers[j] + "'>" + questions[i].answers[j]);
			}
		}	
	},
	done: funtion() {
		$.each($())	
	}
}

//questions
//who is the guardian of Darkroot Garden?
//Alvina
//What name does Havel also go by?
//The Rock
//Where do you fight Seath the Scaleless?
//The Duke's Archives and the Crystal Cave