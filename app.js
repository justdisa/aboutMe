'use strict';

var user = prompt('Hey, there. My name is Disa. It rhymes with Lisa. What\'s your name?');
console.log('The user\'s name is: ' + user + '.');

alert('Well, hello, ' + user + '. I\'m going to ask you some questions!');

var answer = prompt('They\'ll all be yes or no questions, so just answer with a Y or an N. You got that, right?').toUpperCase();
console.log('The user answered: ' + answer);

if (answer === 'Y' || answer === 'YES') {
  alert('Marvelous, ' + user + '! Let\s go!');
} else if (answer === 'N' || answer === 'NO') {
  alert('You know that entering N to tell me you didn\'t understand how to enter N showed me you understood how to enter N, right? Uh huh. Moving on, now.');
} else {
  alert('Are you messing with me?');
}

var answer1 = prompt('Okay. Next question. ' + user + ', I\'ve done some surprising things in my life. Let\'s start small. Do you think I\'ve ever fired a gun?').toUpperCase();
console.log('The user answered: ' + answer1);

if (answer1 === 'Y' || answer1 === 'YES') {
  alert('That\'s right! I fired a gun for the first time before I was two years old.');
} else if (answer1 === 'N' || answer1 === 'NO'){
  alert('Ah, no, ' + user + '. I\'m not into guns, now, but I got my own .22 rifle when I was eight, and passed my hunter\'s safety exam when I was eleven. I was the smallest kid in the class, and the teacher had to waive the shotgun test because I couldn\'t lift the shotgun.');
} else {
  alert('Yeah. Guns are a touchy subject. I wouldn\'t want to answer that one, either.');
}

var answer2 = prompt('Question number two. Or is it three? Do you think I\'ve ever been on a motorcycle?').toUpperCase();
console.log('The user answered: ' + answer2);

if (answer2 === 'Y' || answer2 === 'YES') {
  alert('I surely have! I had a Honda 50 Minibike when I was a kid. Wish I\'d kept that thing. People collect them, now.');
} else if (answer2 === 'N' || answer2 === 'NO'){
  alert('Afraid you missed this one, ' + user + '. Not only have I been on a motorcycle, but the fine surgeons at Harborview put my pelvis back together with a six inch screw after I hit the pavement at sixty miles per hour. I am titanium!');
} else {
  alert('I grew up around guns and motorcycles. Don\'t look so surprised.');
}

var answer3 = prompt('I sing--mostly for fun, but sometimes I get paid. I often tell a story about singing a duet on live television with Governor Gary Locke. Now, I know that performers have been known to exaggerate from time to time. Do you think I\'m making it up?').toUpperCase();
console.log('The user answered: ' + answer3);

if (answer3 === 'Y' || answer3 === 'YES') {
  alert('Who me? It\'s the absolute truth. I was singing a gospel duet at a public concert celebrating Martin Luther King Junior Day, and the Governor was in attendance. The guy I was singing with knew him pretty well. Without warning, he stuck the mic in the Governor\'s face. He sang.');
} else if (answer === 'N' || answer === 'NO') {
  alert('You\'re right, ' + user + '! Governor Locke has a surprisingly nice tenor.');
} else {
  alert('It\'s true. My life is strange enough that I don\'t feel a need to make stuff up.');
}

var answer4 = prompt('You get on a plane and go somewhere. The plane lands. You disembark and trudge wearily through the airport. People do it a million times a day. Do you think I\'ve done it?').toUpperCase();
console.log('The user answered: ' + answer4);

if (answer4 === 'Y' || answer4 === 'YES') {
  alert('Nope! I\'ve gotten on a plane before, but the plane I was on landed without me. I\'d already jumped out of it.');
} else if (answer === 'N' || answer === 'NO') {
  alert('Well, you\'re half right,' + user + '. I\'ve only been in a plane once. I got in. We took off. Then somewhere a couple miles in the air, I jumped out of it and it landed without me.');
} else {
  alert('I have flown in a plane. Someday, I hope to land in one.');
}

var answer5 = prompt('Do you think I always wanted to learn to code?').toUpperCase();
console.log('The user answered: ' + answer5);

if (answer5 === 'Y' || answer5 === 'YES') {
  alert('You\'re right. I took a computer class in 1981 and I loved it, but I didn\'t have a computer at home. Besides, girls weren\'t supposed to like computers...right? That\'s what the boys in the computer lab told me. That derailed me for some time, but here I am. Funny how these things happen, isn\'t it, ' + user + '?');
} else if (answer === 'N' || answer === 'NO') {
  alert('You\'re right. I took a computer class in 1981 and I loved it, but I didn\'t have a computer at home. Besides, girls weren\'t supposed to like computers...right? That\'s what the boys in the computer lab told me. I didn\'t try again for some time, but here I am. Funny how these things happen, isn\'t it, ' + user + '?');
} else {
  alert('No matter how you answer, here, it\'s going to be right.');
}

var index;
for (index = 0; index < 4; index++) {
  var answer6 = prompt('This one\'s a little different. This time I need you to answer with a number. You get four guesses. How many pets do you think I have?').toUpperCase();
  console.log('The user answered: ' + answer6);
  if (!isNaN(answer6)) {
    if (answer6 > 0) {
      alert('Your guess is too high!');
    }
    else if (answer6 < 0) {
      alert('Your guess is too low!');
    }
    else {
      alert('You are correct! I have no pets.');
      break;
    }
  } else {
    alert('I\'m sorry. That\'s not a number.');
  }
}

for (index = 0; index < 6; index++) {
  var answer7 = prompt('Last question! You get six guesses. What state have I lived in other than Washington?').toUpperCase();
  if (answer7 === 'OREGON' || answer7 === OR) {
    alert ('That\s the one!');
  } else {
    alert('Nope. Not that one.');
  }
}
