'use strict';

console.log ('test');


console.log ('test');


var answer1 = Y;
var answer2 = N;
var question1;
var question2;
var question3;
var question4;
var question5;
var correct = 5;

question1 = "Has Dianna been to Hawaii?";
question2 = "Is Dianna a dog person?";
question3 = "Is Dianna the youngest sibling?";
question4 = "Does Dianna love reading?";
question5 = "Does Dianna love seafood?";

var user = prompt('What is your name?');
console.log('The user\'s name is: ' + user);

alert = 'Hi ' + user '!  Welcome to Dianna\'s About Me page.';
alert = 'Before we get started, there will be a simple quiz to see how well you know Dianna, please answer using Y or N.'

var q1 = prompt(user + question1);
if(q1.toUpperCase()==='Y') {
  alert('Correct!  She visited the Aulani Resort!');
} else {
  alert('AHH! Incorrect.')
}






var hourNow = today.getHours();
var greeting;

if (hourNow >20) {
  greeting = 'Thank you for visiting, now go to bed!';
} else {
  greeting = 'Thank you for visiting, hope you have a great day!';
}
document.write ('<h3>' + greeting + '</h3>');
