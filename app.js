'use strict';

console.log ('Testing 1.2.3 Testing');
alert ('Welcome Muggle!');

var quizScore = 0;

var guestName = prompt ('What\'s your name?');
console.log (guestName);
alert (guestName + ' before you start to learn more about Dianna let\'s quiz you on what you already know.  Remember to only answer with Y or N.');

var quiz = [
   {q : 'Does Dianna love the color purple?',
      y:'Ok ' + guestName + ' that was either a good guess, or you really know Dianna.  Let\'s proceed to the next question.',
      n: 'Ahh not so correct ' + guestName + ', but at least now you\'ve learned Dianna loves the color purple.  Let\'s move on to the next question.',
      yes: ' The correct answer is Yes!',
      no: ' The correct answer is No.'},
   {q : 'Does Dianna have more than 1 dog?',
      y: guestName + ' I\'m starting to think you might know Dianna, not like Facebook know her but for reals reals know her.  I\'m still not fully convinced though, answer the next few questions to confirm.',
      n: guestName + ', anyone who knows Dianna knows she has 2 dogs right now, but she\'s had as many as 5 at one time.'},
   {q : 'Is Dianna fluent in 2 languages and learning others?',
      y: 'Ok ' + guestName + ' I think we can both agree that was a bit of a gimmee.  Next question.',
      n: 'I don\'t know if your paying attention, that was a gimme.  The answer is yes, Dianna is fluent in 2 languages and learning more.'},
   {q : 'Is Dianna a fan of all things fantasy?',
      y: guestName + ' now I\'m convinced you really know Dianna.',
      n: 'Sad face!  She loves all things Harry Potter, Ms. Peregrines home for pecular children.  She prefers the book version over the movie any day of the week.'},
   {q: 'Is Dianna\'s favorite food sushi?',
      y: 'She is a fan of sushi, but it\'s not her favorite.  Pad thai with extra limes always wins.  Yes she acknowledges it\'s weird.',
      n: guestName + ' your correct!  Everyone knows she loves pad thai with extra limes!  Weird I know right.'},
   {q: 'Can you guess how many times Dianna has moved In her lifetime?',
      y: 'How\'d you know?!?  Yes Dianna\'s moved 9 times.',
      n1: 'Try Again! You might want to guess higher',
      n2: 'Not quite, try guessing lower.'},
   {q: 'Can you guess a state Dianna has traveled to for work?',
      y: 'Wild and correct guess!',
      n: 'I know lots of states to pick a guess from.  Keep trying.'}
]
console.log (quiz);

var quizQ1 = prompt (quiz[0].q).toUpperCase();
console.log(quizQ1);
if (quizQ1 === 'Y') {
    alert (quiz[0].y);
    quizScore++
    console.log (quizScore);
} else {
    alert (quiz[0].n);
}

var quizQ2 = prompt (quiz[1].q).toUpperCase();
console.log(quizQ2);
if (quizQ2 === 'Y') {
    alert (quiz[1].y);
    quizScore++
    console.log (quizScore);
} else {
    alert (quiz[1].n);
}

var quizQ3 = prompt (quiz[2].q).toUpperCase();
console.log(quizQ3);
if (quizQ3 === 'Y') {
    alert (quiz[2].y);
    quizScore++
    console.log (quizScore);
} else {
    alert (quiz[2].n);
}

var quizQ4 = prompt (quiz[3].q).toUpperCase();
console.log(quizQ4);
if (quizQ4 === 'Y') {
    alert (quiz[3].y);
    quizScore++
    console.log (quizScore);
} else {
    alert (quiz[3].n);
}

var quizQ5 = prompt (quiz[4].q).toUpperCase();
console.log(quizQ5);
if (quizQ5 === 'Y') {
    alert (quiz[4].y);
    quizScore++
    console.log (quizScore);
} else {
    alert (quiz[4].n);
}

var quiz6 = prompt (quiz[5].q);
console.log (quiz6);
var i = 0

for (var i = 0; i<5; i++){
   if (quiz6 <=8) {
       alert (quiz[5].n1);
   } else if (quiz6 >=10) {
       alert (quiz[5].n2);
	 } else {
   		alert (quiz[5].y);
         quizScore++
         console.log (quizScore);
         break;
   }
   quiz6 = prompt (quiz[5].q);
   console.log (quiz6);
}

var quiz7 = prompt (quiz[6].q);
console.log (quiz7);
var states = ['ILLINOIS', 'COLORADO', 'FLORIDA', 'MINNESOTA', 'PENNSYLVANIA'];
console.log (states);

for (var i = 0; i<5; i++){
   if (quiz7 = states[0] || states[1] || states[2] || states[3] || states[4]) {
       alert (quiz[6].y);
       quizScore++
       console.log (quizScore);
       break;
	 } else {
   		alert (quiz[6].n)
   }
   quiz7 = prompt (quiz[6].q);
   console.log (quiz7);
}

var quizScoreResult = Math.round((quizScore/7*100));
console.log (quizScoreResult + '%');

document.write(guestName + ' Thank you for playing!  Your quiz score is ' + quizScoreResult + '%.  All the questions and answers to the quiz are as follows:');
document.write(
"<ol>"
   + "<li>" + quiz[0].q + "</li>"
   + "<li>" + quiz[1].q + "</li>"
   + "<li>" + quiz[2].q + "</li>"
   + "<li>" + quiz[3].q + "</li>"
   + "<li>" + quiz[4].q + "</li>"
   + "<li>" + quiz[5].q + "</li>"
   + "<li>" + quiz[6].q + "</li>"
   +
   "</ol>"
);


/* ............................ORIGINAL CODE FOR LAB 2.................................................
var quizQ1 = prompt ('Does Dianna love the color purple?').toUpperCase();
console.log(quizQ1);
if (quizQ1 === 'Y') {
    alert ('Ok ' + guestName + ' that was either a good guess, or you really know Dianna.  Let\'s proceed to the next question.');
    quizScore++
    console.log (quizScore);
} else {
    alert ('Ahh not so correct ' + guestName + ', but at least now you\'ve learned Dianna loves the color purple.  Let\'s move on to the next question.');
}

var quizQ2 = prompt ('Does Dianna have more than 1 dog?').toUpperCase();
console.log(quizQ2);
if (quizQ2 === 'Y') {
    alert (guestName + ' I\'m starting to think you might know Dianna, not like Facebook know her but for reals reals know her.  I\'m still not fully convinced though, answer the next few questions to confirm.');
    quizScore++
    console.log (quizScore);
} else {
    alert (guestName + ', anyone who knows Dianna knows she has 2 dogs right now, but she\'s had as many as 5 at one time.');
}

var quizQ3 = prompt ('Is Dianna fluent in 2 languages and learning others?').toUpperCase();
console.log(quizQ3);
if (quizQ3 === 'Y') {
    alert ('Ok ' + guestName + ' I think we can both agree that was a bit of a gimmee.  Next question.');
    quizScore++
    console.log (quizScore);
} else {
    alert ('I don\'t know if your paying attention, that was a gimme.  The answer is yes, Dianna is fluent in 2 languages and learning more.');
}

var quizQ4 = prompt ('Is Dianna a fan of all things fantasy?').toUpperCase();
console.log(quizQ4);
if (quizQ4 === 'Y') {
    alert (guestName + ' now I\'m convinced you really know Dianna.');
    quizScore++
    console.log (quizScore);
} else {
    alert ('Sad face!  She loves all things Harry Potter, Ms. Peregrines home for pecular children.  She prefers the book version over the movie any day of the week.');
}

var quizQ5 = prompt ('Is Dianna\'s favorite food sushi?').toUpperCase();
console.log(quizQ5);
if (quizQ5 === 'N') {
    alert (guestName + ' your correct!  Everyone knows she loves pad thai with extra limes!  Weird I know right.');
    quizScore++
    console.log (quizScore);
} else {
    alert ('She is a fan of sushi, but it\'s not her favorite.  Pad thai with extra limes always wins.  Yes she acknowledges it\'s weird.');
}

var quizScoreResult = (quizScore/5*100);
console.log (quizScoreResult + '%');

document.write(guestName + ' Thank you for playing!  Your quiz score is ' + quizScoreResult + '%.  All the questions and answers to the quiz are as follows:');
document.write(
   "<ol>"
     + "<li>" + 'Does Dianna love the color purple? YES!' + "</li>"
     + "<li>" + 'Does Dianna have more than 1 dog? YES!' + "</li>"
     + "<li>" + 'Is Dianna fluent in 2 languages and learning others? YES!' + "</li>"
     + "<li>" + 'Is Dianna a fan of all things fantasy? YES!' + "</li>"
     + "<li>" + 'Is Dianna\'s favorite food sushi? NO!' + "</li>"
     +
   "</ol>"
); */


/*...................PSUEDO CODE FOR LAB 3 ...........
var quizScoreResult = (quizScore/7*100);

document.write (quiz[0].q + quiz[0].yes);
document.write (quiz[1].q + quiz[0].yes);
document.write (quiz[2].q + quiz[0].yes);
document.write (quiz[3].q + quiz[0].yes);
document.write (quiz[4].q + quiz[0].no);

.....PUTTING ALL QUESTIONS IN AN ARRAY OPTIONS....
{q: 'Can you guess how many times I\'ve moved in my lifetime?', a: '9'},
{q: 'What is one of Dianna\'s favorite Disney movies?', a: 'Beauty and the Beast'}

var quizQuestions = ['Does Dianna love the color purple?', 'Does Dianna have more than 1 dog?', 'Is Dianna fluent in 2 languages and learning others?', 'Is Dianna a fan of all things fantasy?', 'Is Dianna\'s favorite food sushi?', 'Can you guess how many times I\'ve moved in my lifetime?', 'What is one of Dianna\'s favorite Disney movies?'];

var quizQandA = ['Y', 'N', '9', ('Beauty and the Beast', 'The Little Mermaid', 'Moana', 'Cinderella')];

var elQue = document.getElementById (quizQuestions(0));

questions [(0), (1), (3), (4), (5), (6), (7)];
answers [(0), (1), (2), (7)];

...... COMMAND LINE REMEMBERALS......
Dianna remember
   git add . --to Add
   git commit -m 'with notes about what your pushing or why, think what changes have you made'
   git push origin -- this will push to your origin link you've already created
   git status -- should you ever be lost

q6 will be 'Can you guess how many times I've moved in my lifetime?'
q6a 'I know right! Really though I\'ve only moved 9 times within 2 states.'

print each question aftr it\'s been answered with the question and answer.

will launch links in between each html file*/
