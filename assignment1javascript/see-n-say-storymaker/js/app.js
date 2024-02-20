// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
let count = 0;
let nounPurple = ['the turkey', 'mom','dad','the dog','my teacher','the elephant', 'the cat'];
let verbBlue = ['sat on', 'ate','danced with','saw','doesn\'t like','kissed'];
let adjectiveGreen = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
let nounOrange = ['goat','monkey','fish','cow','frog','bug','worm'];
let placePink = ['on the moon','on the chair', 'in my spaghetti','in my soup','on the grass','in my shoes'];

let synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
let s;
let a;
let nounBtn = document.querySelector('button');
let verbBtn = document.querySelector('#verbBtn');
let adjectiveBtn = document.querySelector('#adjectiveBtn');
let nounBtn2 = document.querySelector('#nounBtn2');
let placeBtn = document.querySelector('#placeBtn');
let randomStoryBtn = document.querySelector('#randomStory');


/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	let utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
nounBtn.onclick = function() {
	s = nounPurple[count];
	a = nounPurple;
	speak();
	
}

verbBtn.onclick = function(){
	s = verbBlue[count];
	a = verbBlue;
	speak();

}

adjectiveBtn.onclick = function(){
	s = adjectiveGreen[count];
	a = adjectiveGreen;
	speak();
}
nounBtn2.onclick = function(){
	s = nounOrange[count];
	a = nounOrange;
	speak();
}
placeBtn.onclick = function(){
	s = placePink[count];
	a = placePink;
	speak();
}


randomStoryBtn.onclick = function(){
	let x = Math.random();

	let nounRandom= Math.floor(x * nounPurple.length);
	let verbRandom =Math.floor(x* verbBlue.length) ;
	let adjectiveRandom = Math.floor(x * adjectiveGreen.length);
	let noun2Random = Math.floor(x * nounOrange.length);
	let placeRandom = Math.floor(x * placePink.length);

	let nounRandomText = nounPurple[nounRandom];	
	let verbRandomText = verbBlue[verbRandom];
	let adjectiveRandomText = adjectiveGreen[adjectiveRandom];
	let noun2RandomText = nounOrange[noun2Random];
	let placeRandomText = placePink[placeRandom];
	let s= nounRandomText+ " " +verbRandomText+ " " +adjectiveRandomText+ " " +noun2RandomText+ " " +placeRandomText;
	speakNow(s);
}
function speak(){
	speakNow(s);
	count++;
	if(count >=a.length){
		count = 0;
	}
}
