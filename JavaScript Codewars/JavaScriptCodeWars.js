// convert time into milliseconds

function past(h, m, s) {
  //#Happy Coding! ^_^

  convertHours = h * 60 * 60 * 1000;
  convertMinutes = m * 60 * 1000;
  convertSeconds = s * 1000;

  result = convertHours + convertMinutes + convertSeconds;
  return result;
}

// we multiply numbers by 60 to convert them into smaller parts of a whole (minutes -> seconds)
// we then multiply by 1000 because there are 1000 ms in a s rather than 60 s in a m.

// greet who?

function greet(name, owner) {
  // Add code here
  if (name == owner) {
    return 'Hello boss';
  }
  return 'Hello guest';
}

// how to reverse the characters then words in a string

function reverseWords(str) {
  // Go for it

  return str.split('').reverse().join('').split(' ').reverse().join(' ');
  // this returns the string first split at each character (including spaces), then each
  // character is reversed, following by the characters being joined together.
  // then we repeat those steps but we start by separating at each word then reversing the
  // words.
}

// converts a number to a stringer

function numberToString(num) {
  // Return a string of the number here!

  return num.toString();
  // the .toString() converts numbers into strings.
}

// javascript even or odd number

function even_or_odd(number) {
  if (number % 2 == 0) {
    return 'Even';
  }
  return 'Odd';
}

// javascript rock, paper, scissors

const rps = (p1, p2) => {
  if (p1 == p2) {
    return 'Draw!';
  } else if (p1 == 'rock' && p2 == 'scissors') {
    return 'Player 1 won!';
  } else if (p1 == 'paper' && p2 == 'rock') {
    return 'Player 1 won!';
  } else if (p1 == 'scissors' && p2 == 'paper') {
    return 'Player 1 won!';
  } else {
    return 'Player 2 won!';
  }
};

// golf game scores

const names = [
  'Hole-in-one!',
  'Eagle',
  'Birdie',
  'Par',
  'Bogey',
  'Double Bogey',
  'Go Home!',
];

function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return 'Hole-in-one!';
  } else if (strokes <= par - 2) {
    return 'Eagle';
  } else if (strokes == par - 1) {
    return 'Birdie';
  } else if (strokes == par) {
    return 'Par';
  } else if (strokes == par + 1) {
    return 'Bogey';
  } else if (strokes == par + 2) {
    return 'Double Bogey';
  } else if (strokes >= par + 3) {
    return 'Go Home!';
  } else {
    return 'Change Me';
    // Only change code above this line
  }
}
golfScore(5, 4);

// pull the middle letters of a string out of the string and only pull 1 if odd or 2 if even

function getMiddle(s) {
  //Code goes here!
  let position;
  let length;

  if (s.length % 2 == 1) {
    position = s.length / 2;
    length = 1;
  } else {
    position = s.length / 2 - 1;
    length = 2;
  }

  // the .substring method is used to create a string out of a string using certain parameters
  return s.substring(position, position + length);
}

// convert a string to a number using parseInt()

var stringToNumber = function (str) {
  // put your code here
  return parseInt(str);
};

// sums up three grades and divides them for an average, then gives the grades

function getGrade(s1, s2, s3) {
  // Code here
  average = (s1 + s2 + s3) / 3;
  if (average >= 90 && average <= 100) {
    return 'A';
  } else if (average >= 80 && average < 90) {
    return 'B';
  } else if (average >= 70 && average < 80) {
    return 'C';
  } else if (average >= 60 && average < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

// remove character from a string

// first we set our new string equal to each individual character of the original string
// then we use newStr.shift(); to remove the first character of the string.
// then we use the newStr.pop() to remove the last character of the string.
// then we return newStr.join("") to return the string as a one complete string.

function removeChar(str) {
  //You got this!
  newStr = str.split('');
  newStr.shift();
  newStr.pop();
  return newStr.join('');
}

// double a given integer

function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  i = i * 2;
  return i;
}

// count and array of sheep filled with true and false, true meaning there's a sheep there.

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you

  var num = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] == true) {
      num++;
    }
  }
  return num;
}

//does the string have the same amount of x's and o's irrelevant to capitalization

function XO(str) {
  //code here

  let o = 0;
  let x = 0;

  // we create a for loop so that it can run as long as there's more in the array
  // we use .toLowerCase() to change the string to all lower case to account for case;
  // at the end we return the comparison between the count for x and the count for o

  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() == 'o') {
      o++;
    } else if (str[i].toLowerCase() == 'x') {
      x++;
    }
  }

  return x == o;
}

// create a function that returns 'hello world!'

function greet() {
  return 'hello world!';
}

// make the first letter of each word in a string capitalized (JadenCase)

String.prototype.toJadenCase = function () {
  // we declare new string to put in the desired contents
  var newStr = '';

  // we split the inputed string at each space between words
  // we use forEach to say that for each str item given in the variable
  // newStr will = newStr + space + strings and use toUpperCase() to capitalize the first letters of each word
  // we must then add that new string to the old string IN the new array.
  this.split(' ').forEach(function (s) {
    newStr = newStr + ' ' + s.substring(0, 1).toUpperCase() + s.substring(1);
  });

  return newStr.substr(1);
};

function areYouPlayingBanjo(name) {
  // Implement me
  if (name.charAt(0) == 'R' || name.charAt(0) == 'r') {
    return name + ' plays banjo';
  } else {
    return name + ' does not play banjo';
  }
}

// return the shortest word from an array

function findShort(s) {
  let arr = s.split(' ').sort((a, b) => a.length - b.length);
  return arr[0].length;
}

function howMuchILoveYou(nbPetals) {
  // your code
  if (nbPetals % 6 == 1) {
    return 'I love you';
  } else if (nbPetals % 6 == 2) {
    return 'a little';
  } else if (nbPetals % 6 == 3) {
    return 'a lot';
  } else if (nbPetals % 6 == 4) {
    return 'passionately';
  } else if (nbPetals % 6 == 5) {
    return 'madly';
  } else {
    return 'not at all';
  }
}

// create a function where the animals name's first and last characters and their
// corresponding dish's first and last letters match.

function feast(beast, dish) {
  //your function here
  lastLetterBeast = beast.charAt(beast.length - 1);
  lastLetterDish = dish.charAt(dish.length - 1);

  firstLetterBeast = beast.charAt(0);
  firstLetterDish = dish.charAt(0);

  if (
    lastLetterBeast == lastLetterDish &&
    firstLetterBeast == firstLetterDish
  ) {
    return true;
  } else {
    return false;
  }
}

// create a function that squares each digit in a argument and use catotination to combine
// the results
function squareDigits(num) {
  let numStr = num.toString();

  let squaredFinal = '';

  // create a for loop that will run for the amount of digits
  for (let i = 0; i < numStr.length; i++) {
    // set the squaredFinal string = to the current total + the digit as a integer
    squaredFinal = squaredFinal + (parseInt(numStr[i]) ** 2 + '');
  }

  //make the final string into an integer
  return parseInt(squaredFinal);
}

// create a function that returns Messi's goals across the league.
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  // code goes here
  totalGoals = laLigaGoals + copaDelReyGoals + championsLeagueGoals;
  return totalGoals;
}

// create a function that return true or false based on the status of the boolean

function boolToWord(bool) {
  //...
  if (bool == true) {
    return 'Yes';
  } else {
    return 'No';
  }
}

//create a function that returns a number in an array, reveresed.
function digitize(n) {
  //code here
  toArr = n.toString().split('').reverse().map(Number);
  // we used .map(Number) to return the split string into an array.

  return toArr;
}

//return the summation of a number and all numbers leading up to it.

var summation = function (num) {
  // this code allows us to add every number up to a certain number together.

  let count = 0;
  for (let i = 0; i <= num; i++) {
    count += i;
  }
  return count;
};

// create a function that returns perfect squares

function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  if (Math.sqrt(sq) % 1 === 0) {
    // here we are getting the square root of the numner and seeing if it has a remainder,
    // when divided by 1.
    // if it does this means that the number is a perfect square.
    return (Math.sqrt(sq) + 1) ** 2;
    // here we are getting the square root then adding one to it and squaring it again.
  } else {
    return -1;
  }
}

// Opposites Attract

function lovefunc(flower1, flower2) {
  // moment of truth

  if (
    (flower1 % 2 == 0 && flower2 % 2 !== 0) ||
    (flower1 % 2 !== 0 && flower2 % 2 == 0)
  ) {
    return true;
  } else {
    return false;
  }
}

// Grasshopper - Check for factor

function checkForFactor(base, factor) {
  // code here
  if (base % factor == 0) {
    return true;
  } else {
    return false;
  }
}

// Convert a string to an array

function stringToArray(string) {
  // code code code
  let array = string.split(' ');
  return array;
}

// Quarter of the year

const quarterOf = (month) => {
  // Your code here
  if (month <= 3) {
    return 1;
  } else if (month > 3 && month <= 6) {
    return 2;
  } else if (month > 6 && month <= 9) {
    return 3;
  } else if (month > 9 && month <= 12) {
    return 4;
  }
};

// Calculate BMI

function bmi(weight, height) {
  let bmi = weight / Math.pow(height, 2);

  if (bmi <= 18.5) {
    return 'Underweight';
  } else if (bmi <= 25.0) {
    return 'Normal';
  } else if (bmi <= 30.0) {
    return 'Overweight';
  } else if (bmi > 30) {
    return 'Obese';
  }
}

// Abbreviate a Two Word Name

function abbrevName(name) {
  // code away

  let nameArr = name.split(' ');
  // here we are creating an array with the two names

  return nameArr[0][0] + '.' + nameArr[1][0].toUpperCase();
  // here we access the first strings first character value and then the second items first charactor value
}

// Find the smallest integer in the array

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
    // here we are using ... to spread the args array
    // we then have the Math.min method run to return the smallest number.
  }
}

// Find Maximum and Minimum Values of a List

var min = function (list) {
  list.sort();
  return Math.min(...list);
};

var max = function (list) {
  list.sort();
  return Math.max(...list);
};

// Disemvowel Trolls

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}
//Convert a Boolean to a String

function booleanToString(b) {
  //your code here
  if (b) {
    return (b = 'true');
  } else {
    return (b = 'false');
  }
}

//Sum of the first nth term of Series

function SeriesSum(n) {
  // Happy Coding ^_^
  let result = 0;

  let average = 1;

  for (let i = 0; i < n; i++) {
    if (i == 0) {
      result = 1;
    } else {
      average += 3;
      result = result + 1 / average;
    }
  }
  return result.toFixed(2);
}

// Keep Hydrated!

function litres(time) {
  let litres = time * 0.5;
  return Math.floor(litres);
}

// Will you make it?

const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  if (distanceToPump <= mpg * fuelLeft) {
    return true;
  } else {
    return false;
  }
};

//The highest profit wins!

function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)]; // fix me!
}

// Remove String Spaces

function noSpace(x) {
  return x.split(' ').join('');
}

// All Star Code Challenge #18

function strCount(str, letter) {
  //code here
  return str.split(letter).length - 1;

  //why do we need the minus 1 here?
}

// Who likes it?

function likes(names) {
  // TODO

  // create a if else statement that checks how many items are in the names array
  // use template literals to access the names and add the necessary string.
  if (names.length == 0) {
    return 'no one likes this';
  } else if (names.length == 1) {
    return `${names[0]} likes this`;
  } else if (names.length == 2) {
    return `${names[0]} and ${names[1]} like this`;
  } else if (names.length == 3) {
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;

    //set this next one to check if it is greater than 3
  } else if (names.length > 3) {
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}

//Parse nice int from char problem

function getAge(inputString) {
  // return the girl's correct age as an integer. Happy coding :)
  return parseInt(inputString.slice('0, 1'));
}

//Sum of positive

function positiveSum(arr) {
  const reducer = (accumulator, current) =>
    accumulator + (current > 0 ? current : 0);
  //reducer gets two parameters, accumlator and current
  // accumulator is the total
  // the current is only added if it is greater than 0

  return arr.reduce(reducer, 0);
}

// Can we divide it?

function isDivideBy(number, a, b) {
  // good luck
  if (number % a == 0 && number % b == 0) {
    return true;
  } else {
    return false;
  }
}

// Transportation on vacation

function rentalCarCost(d) {
  // Your solution here
  if (d >= 7) {
    return 40 * d - 50;
  } else if (d >= 3) {
    return 40 * d - 20;
  } else {
    return 40 * d;
  }
}

// Volume of a Cuboid

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    // your code here

    let volume = length * width * height;

    return volume;
  }
}

// MakeUpperCase

function makeUpperCase(str) {
  // Code here
  let newStr = str.toUpperCase();
  return newStr;
}

// Student's Final Grade

function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }

  // Total amount of points

  function points(games) {
    let homePoints = 0;

    games.forEach(function (game) {
      // here we use the forEach to run a function on each array item

      let x = game.split(':')[0];

      let y = game.split(':')[1];
      // we then set the value of the arrays equal to x and y respectively

      // we must then create an if else function that checks the values and assigns the proper points.
      if (x === y) {
        homePoints++;
      } else if (x > y) {
        homePoints += 3;
      } else {
        homePoints += 0;
      }
    });
    return homePoints;
  }
}

// Beginner Series #4 Cockroach

function cockroachSpeed(s) {
  //Good Luck!
  return Math.floor(s / 0.036);
}

function correct(string) {
  // your code here

  // to do this we will return one line of 3 string.replace methods with each one
  // set to the corresponding rules.

  return string.replace(/5/g, 'S').replace(/0/g, 'O').replace(/1/g, 'I');
}

//Thinkful - Logic Drills: Traffic light

function updateLight(current) {
  //your code here!

  if (current == 'green') {
    return 'yellow';
  } else if (current == 'yellow') {
    return 'red';
  } else if (current == 'red') {
    return 'green';
  }
}

//Invert values

function invert(array) {
  // here we use the .map array method so that we can multiply each item in the array by -1 which gives us the inverted value.
  return array.map((num) => num * -1);
}

// Keep up the hoop

function hoopCount(n) {
  //your code goes here
  if (n >= 10) {
    return 'Great, now move on to tricks';
  } else {
    return 'Keep at it until you get it';
  }
}

// Write the "square"-function here

function square(number) {
  return Math.pow(number, 2);
}

function testEven(n) {
  //Your awesome code here!
  if (n % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function isTriangle(a, b, c) {
  return a + b > c && b + c > a && c + a > b;
}

// debug sayHello function

function sayHello(name) {
  return 'Hello, ' + name;
}

//create your first javascript function!

//refer to the example and write your first JS function
function helloWorld() {
  var str = 'Hello World!';

  console.log(str);
}

// Sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers) {
  //Code here

  let first = Math.min(...numbers);

  numbers.splice(numbers.indexOf(first), 1);

  let second = Math.min(...numbers);

  return first + second;
}

// Powers of 2

function powersOfTwo(n) {
  var myArray = [];
  for (let i = 0; i <= n; i++) {
    myArray.push(2 ** i);
  }
  return myArray;
}

// Find the stray number

function stray(numbers) {
  let sorted = numbers.sort();
  if (sorted[0] !== sorted[1]) {
    return sorted[0];
  } else {
    return sorted[sorted.length - 1];
  }
  return 0;
}

// Training JS #7: if..else and ternary operator

function saleHotdogs(n) {
  return n < 5 ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90;
}

// Removing Elements

function removeEveryOther(arr) {
  var newArr = [];

  // this for loop will return the item in array slot [2]
  for (let i = 0; i < arr.length; i += 2) {
    newArr.push(arr[i]);
  }
  return newArr;
}

// alarm on and off
function setAlarm(employed, vacation) {
  return employed && !vacation;
}
