'use strict';

console.log ('Testing 1.2.3 Testing');
alert ('Welcome Muggle!');

var quizScore = 0;

var guestName = prompt ('What\'s your name?');
console.log (guestName);
alert (guestName + ' before you start to learn more about Dianna let\'s quiz you on what you already know.  Remember to only answer with Y or N.');


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
);
