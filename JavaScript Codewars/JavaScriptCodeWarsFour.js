// Grasshopper - Variable Assignment Debug (8 kyu)

var a = 'dev';
var b = 'Lab';

var name = a + b;

// Multiple of index (8 Kyu)

function multipleOfIndex(array) {
  let holdArray = [];

  // loop over the array
  // check if the num is a multiple
  // push it to a new array if it is
  for (let i = 0; i < array.length; i++) {
    if (array[i] % i === 0) {
      holdArray.push(array[i]);
    }
  }
  return holdArray;
}

// Simple validation of a username with regex 8 kyu

function validateUsr(username) {
  //   check for a-z 0-9 and _ in brackets
  // in the curly braces, make sure its 4 to 16 characters
  res = /^[a-z0-9_]{4,16}$/.test(username);
  return res;
}

// Reversed sequence 8 Kyu

const reverseSeq = (n) => {
  let count = [];
  for (var i = n; i > 0; i -= 1) {
    count.push(i);
  }
  return count;
};

// Training JS #3: Basic data types--String 8 kyu

var a1 = 'A',
  a2 = 'a',
  b1 = 'B',
  b2 = 'b',
  c1 = 'C',
  c2 = 'c',
  d1 = 'D',
  d2 = 'd',
  e1 = 'E',
  e2 = 'e',
  n1 = 'N',
  n2 = 'n';
function Dad() {
  //select some variable to combine "Dad"
  return d1 + a2 + d2;
}
function Bee() {
  //select some variable to combine "Bee"
  return b1 + e2 + e2;
}
function banana() {
  //select some variable to combine "banana"
  return b2 + a2 + n2 + a2 + n2 + a2;
}

//answer some questions if you finished works above
function answer1() {
  //the answer should be "yes" or "no"
  return 'no';
}
function answer2() {
  //the answer should be "yes" or "no"
  return 'no';
}
function answer3() {
  //the answer should be "yes" or "no"
  return 'yes';
}

// How old will I be in 2099? 8 Kyu

function calculateAge(age1, age2) {
  // enter your code here.
  if (age2 > age1) {
    if (age2 - age1 == 1) {
      return 'You are 1 year old.';
    }
    return 'You are ' + (age2 - age1) + ' years old.';
  } else if (age1 > age2) {
    if (age1 - age2 == 1) {
      return 'You will be born in 1 year.';
    }
    return 'You will be born in ' + (age1 - age2) + ' years.';
  } else {
    return 'You were born this very year!';
  }
}

// Fundamentals: Return 8 Kyu

function add(a, b) {
  return a + b;
}

function divide(a, b) {
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

function mod(a, b) {
  return a % b;
}

function exponent(a, b) {
  return a ** b;
}

function subt(a, b) {
  return a - b;
}

// Remove duplicates from list 8 Kyu

function distinct(a) {
  return [...new Set(a)];
}

// Fix string case 7 kyu

function solve(s) {
  //..
  let lowerCase = 0;
  let upperCase = 0;

  for (letter of s) {
    if (letter == letter.toLowerCase()) {
      lowerCase++;
    } else if (letter == letter.toUpperCase()) {
      upperCase++;
    }
  }

  if (lowerCase == upperCase) {
    return s.toLowerCase();
  } else if (lowerCase > upperCase) {
    return s.toLowerCase();
  } else if (upperCase > lowerCase) {
    return s.toUpperCase();
  }
}

// Count the divisors of a number 7 Kyu

function getDivisorsCnt(n) {
  let count = 0;
  // todo
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      count++;
    }
  }
  return count;
}

// Find the position! 8 Kyu

function position(letter) {
  //Write your own Code!
  return `Position of alphabet: ${letter.charCodeAt() - 96}`;
}

// Greet Me level 7 Kyu

var greet = function (name) {
  let firstLetter = name.slice(0, 1).toUpperCase();
  console.log(firstLetter);
  let restOfWord = name.slice(1, 1000).toLowerCase();
  console.log(restOfWord);
  return `Hello ${firstLetter + restOfWord}!`;
};

// Remove First and Last Character Part Two (8 Kyu)

function array(arr) {
  // split at the commas, slice the first and last letter then join it with a space between each character
  return arr.split(',').slice(1, -1).join(' ') || null;
}

// Bumps in the Road 7 Kyu

function bump(x) {
  let count = 0;

  for (letter of x) {
    if (letter == 'n') {
      count++;
    }
  }
  return count > 15 ? 'Car Dead' : 'Woohoo!';
}

// Grasshopper - Create the rooms (8 Kyu)

// Add rooms here
// create a hash table called rooms
// give the rooms hash table properties of:
// firstRoom, secondRoom, thirdRoom
// give the properties values
var rooms = {
  firstRoom: { name: 'Red', description: 'Hello', completed: false },
  secondRoom: { name: 'Red', description: 'Hello', completed: false },
  thirdRoom: { name: 'Red', description: 'Hello', completed: false },
};

// Isograms

function isIsogram(str) {
  //...
  // set the string to lowercase for matching cases
  str = str.toLowerCase();

  // start counter variables
  var i;
  var j;

  // start a loop for i
  for (i = 0; i < str.length; ++i) {
    // start a loop for j that is always one more than i
    // first update the number then use the value
    for (j = i + 1; j < str.length; ++j) {
      // if the values are equal then it is not an Isogram
      if (str[i] === str[j]) {
        return false;
      }
    }
  }
  return true;
}

// Char Code Calculation (7 Kyu)

function calc(x) {
  // create a new str variable
  // split the variable to map it
  // in the map each variable is the charcode at that value
  let str = x
    .split('')
    .map((e) => (e = e.charCodeAt(0)))
    .join('')
    .split('');

  // create a copy of the other string and replace all 7s with 1s
  let copy = str.map((e) => {
    if (e === '7') {
      e = '1';
    }
    return e;
  });

  console.log(str);

  // add up all the numbers in the ints and subtract
  return str.reduce((a, c) => a + +c, 0) - copy.reduce((a, c) => a + +c, 0);
}

// The 'if' function (8 kyu)

function _if(bool, func1, func2) {
  // ...
  return bool == true ? func1() : func2();
}

// USD => CNY (8 Kyu)

function usdcny(usd) {
  return `${(usd * 6.75).toFixed(2)} Chinese Yuan`;
}

function factorial(n) {
  //your code here
  return n > 1 ? n * factorial(n - 1) : 1;
}

// Grader 8 Kyu

function grader(score) {
  // p = we take a number 0 - 1.0
  // r = "A" || "B" || "C" || "D" || "F"
  // e = 0.7 = "C"
  // p = check the number if the number is a certain range return the letter
  if (score >= 0.6 && score < 0.7) {
    return 'D';
  } else if (score >= 0.7 && score < 0.8) {
    return 'C';
  } else if (score >= 0.8 && score < 0.9) {
    return 'B';
  } else if (score >= 0.9 && score <= 1) {
    return 'A';
  } else {
    return 'F';
  }
}

// Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right (8 Kyu)

function remove(s, n) {
  //coding and coding....

  // p - we are taking in a string s and int n
  // r - we are return s with n '!' removed
  // e - s = "Hi!"; n = 1; returns "Hi"
  // p - let's declare what we want to replace
  // then run a loop to replace '!' n amount of times with ''
  // return the new s

  //   let regex = /!/gi (doesn't work?)

  while (n) {
    s = s.replace('!', '');
    console.log(s);
    n--;
    console.log(n);
  }

  console.log(s, 'final s');
  return s;
}

// Smallest value of an array 8 Kyu

function min(arr, toReturn) {
  // TODO

  // p = an array of numbers, and a string of either 'value' or 'index'
  // r = return toReturn == 'value' ? value : index
  // e = [1, 2, 3, 4, 5] 'value' 1
  // p =

  let lowest = Math.min(...arr);

  return toReturn == 'value' ? lowest : arr.indexOf(Math.min(...arr));
}

function grabDoll(dolls) {
  var bag = [];
  //coding here
  for (doll of dolls) {
    if (doll == 'Hello Kitty' || doll == 'Barbie doll') {
      bag.push(doll);
    } else continue;
    if (bag.length >= 3) break;
  }
  return bag;
}

// Alphabet war (7 Kyu) JavaScript

function alphabetWar(fight) {
  const leftLetters = {
    w: 4,
    p: 3,
    b: 2,
    s: 1,
  };

  const rightLetters = {
    m: 4,
    q: 3,
    d: 2,
    z: 1,
  };

  let leftCount = 0;
  let rightCount = 0;

  // p = parameters = a string of letters
  // r = returns = Right side wins! or Left side wins!
  // e = examples = "z" = "Right side wins"
  // p = pseudocode
  //

  let fightSplit = fight.split('');

  for (let i = 0; i < fight.length; i++) {
    if (fight[i] in leftLetters) {
      leftCount += leftLetters[fight[i]];
    } else if (fight[i] in rightLetters) {
      rightCount += rightLetters[fight[i]];
    }
  }

  if (leftCount > rightCount) {
    return 'Left side wins!';
  } else if (rightCount > leftCount) {
    return 'Right side wins!';
  } else {
    return "Let's fight again!";
  }
}

// Split In Parts (7 Kyu)

var splitInParts = function (s, partLength) {
  // Good Luck!

  // p = a string of letters, and a int
  // r = return the string split into parts of equal length to the int
  // e = "HelloKata", 1 = "H e l l o K a t a"
  // p = create a new arr
  // run a for loop
  // push the parLength amount of characters into the string

  let lastArray = [];

  for (let i = 0; i < s.length; i += partLength) {
    lastArray.push(s.slice(i, i + partLength));
  }
  return lastArray.join(' ');
};

// Flatten and sort an array (7 Kyu)

('use strict');

function flattenAndSort(array) {
  // Good luck, brave code warrior!
  return array.flat().sort((a, b) => a - b);
}

// Find out whether the shape is a cube
var cubeChecker = function (volume, side) {
  return Math.abs(side) ** 3 == volume && volume !== 0 && side > 0
    ? true
    : false;
};

// Training JS #5: Basic data types--Object 8 Kyu

function animal(obj) {
  return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
}

// Grasshopper - Function Syntax Debugging 8 Kyu
function main(verb, main) {
  //   verb = verb.toString()
  //   noun = main.toSTring()
  return verb + main;
}

// IPv4 to int32 (6 Kyu) JavaScript

function ip4toInt32(n) {
  //split string by dots
  //map array, convert each number to 8 digit binary
  //parse the integer with 2 as the specified radix

  let arr = n
    .split('.')
    .map((e) => {
      e = Number(e);
      return ('00000000' + e.toString(2)).slice(-8);
    })
    .join('');
  return parseInt(arr, 2);

  // the 2 is the radix, which is a parameter that defines the number system used, in this case binary
}

// Tidy Number (Special Numbers Series #9) Level 7 Kyu Javascript

function tidyNumber(n) {
  let splitN = n.toString().split('');
  console.log(splitN);
  //your code here
  let count = 0;
  for (let i = 0; i < splitN.length; i++) {
    console.log(splitN[i]);
    if (+splitN[i] > +splitN[i + 1]) {
      return false;
    }
  }
  return true;
}

// Sum without highest and lowest number 8 Kyu

function sumArray(array) {
  // p = we are getting an array of numbers
  // r = we are returning the array summed without the first and last numbers;
  // e = [3, 5]
  // p

  //   if (array && array.length > 1) {
  //     // sort the array so that the numbers are in order
  //     let sortedArray = array.sort((a, b) => a - b)
  //     // slice the first and last numbers
  //     let slicedArray = sortedArray.slice(1, -1)
  //     // return the slicedArray reduced
  //     return slicedArray.reduce((a, b) => a + b, 0)
  //   }
  //   if (array && array.length > 1) {
  //     return array.sort((a, b) => a - b).slice(1, -1).reduce((a, b) => a + b, 0)
  //   }
  //   return 0;

  // refactored
  return array && array.length > 1
    ? array
        .sort((a, b) => a - b)
        .slice(1, -1)
        .reduce((a, b) => a + b, 0)
    : 0;
}

// Take the Derivative (8 Kyu)
function derive(coefficient, exponent) {
  let exponentPost = exponent - 1;
  let coefficientPost = coefficient * exponent;
  return coefficientPost.toString() + 'x^' + exponentPost.toString();
}
