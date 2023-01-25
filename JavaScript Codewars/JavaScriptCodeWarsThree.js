// Grasshopper - Basic Function Fixer (Level 8 Kyu)

function addFive(num) {
  let total = num + 5;
  return total;
}

// Exclamation marks series #1: Remove an exclamation mark from the end of string (Level 8 Kyu)

function remove(string) {
  //coding and coding....
  // return a string.sliced at the end if it ends with !, and s if it doesn't end with !
  return string[string.length - 1] == '!'
    ? string.slice(0, string.length - 1)
    : string;
}

// The Wide-Mouthed Frog! (Level 8 Kyu)

function mouthSize(animal) {
  // code here
  return animal.toUpperCase() == 'ALLIGATOR' ? 'small' : 'wide';
}

// You only need one - Beginner

function check(a, x) {
  // your code here
  if (a.includes(x)) {
    return true;
  } else {
    return false;
  }
}

// Reverse Strings (Level 8 Kyu)
function solution(str) {
  return str.split('').reverse().join('');
}

// Find the odd int (Level 6 Kyu)

function findOdd(A) {
  //happy coding!

  // first loop through the array
  for (let i = 0; i < A.length; i++) {
    //next filter the array value
    const count = A.filter((value) => value === A[i]).length;

    // if it's odd
    if (count % 2 == 1) {
      // return that array number
      return A[i];
    }
  }
}

// Filter out the geese (Level 8 Kyu)

function gooseFilter(birds) {
  var geese = ['African', 'Roman Tufted', 'Toulouse', 'Pilgrim', 'Steinbacher'];

  // We use the filter method to get a subset of the original array (birds) based on specific criteria. The filter method tests each element of the array, so in our case here, we want to pull out ONLY the items that are not included in the geese array.

  return birds.filter((item) => !geese.includes(item));
  // return an array containing all of the strings in the input array except those that match strings in geese
}

// Beginner - Reduce but Grow (Level 8 Kyu)

function grow(x) {
  return x.reduce((acc, c) => acc * c);
}

// You're the square! (Level 7 Kyu)
var isSquare = function (n) {
  return false; // fix me
};

// String transformer (Level 6 Kyu)

function stringTransformer(str) {
  // Your code here
  let mapped = str
    .split(' ')
    .map((x) =>
      x.replace(/./gi, (x) => {
        if (x === x.toLowerCase()) return x.toUpperCase();
        if (x === x.toUpperCase()) return x.toLowerCase();
      })
    )
    .reverse()
    .join(' ');
  return mapped;
}

// Training JS #4: Basic data types--Array (Level 8 Kyu)
function getLength(arr) {
  //return length of arr
  return arr.length;
}
function getFirst(arr) {
  //return the first element of arr
  return arr[0];
}
function getLast(arr) {
  //return the last element of arr
  return arr[arr.length - 1];
}
function pushElement(arr) {
  var el = 1;
  //push el to arr
  arr.push(el);

  return arr;
}
function popElement(arr) {
  //pop an element from arr

  arr.pop();
  return arr;
}

// Bin to Decimal (Level 8 Kyu)
function binToDec(bin) {
  // ...
  return parseInt(bin, 2);
}

// twoSum (Level 6 Kyu)
function twoSum(numbers, target) {
  let index = [];

  for (let i = 0; i < numbers.length; i++)
    for (let j = i + 1; j < numbers.length; j++)
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
}

// Training JS #2: Basic data types--Number (8 kyu)
let v1 = 50,
  v2 = 100,
  v3 = 150,
  v4 = 200,
  v5 = 2,
  v6 = 250;

function equal1() {
  let a = v1,
    b = v1;
  return a + b;
}

//Please refer to the example above to complete the following functions
function equal2() {
  let a = v3, //set number value to a
    b = v1; //set number value to b
  return a - b;
}

function equal3() {
  let a = v1, //set number value to a
    b = v5; //set number value to b
  return a * b;
}

function equal4() {
  let a = v4, //set number value to a
    b = v5; //set number value to b
  return a / b;
}

function equal5() {
  let a = v2, //set number value to a
    b = v4; //set number value to b
  return a % b;
}

// DNA to RNA Conversion (8 kyu)

function DNAtoRNA(dna) {
  // use regex to replace 'T' globally with 'U'
  return dna.replace(/T/g, 'U');
}

// get Character from ASCII Value

function getChar(c) {
  // ...
  return String.fromCharCode(c);
}

// Make a function that does arithmetic! (7 Kyu)

function arithmetic(a, b, operator) {
  //your code here!
  if (operator == 'add') {
    return a + b;
  } else if (operator == 'subtract') {
    return a - b;
  } else if (operator == 'multiply') {
    return a * b;
  } else if (operator == 'divide') {
    return a / b;
  }
}

// altERnaTIng cAsE <=> ALTerNAtiNG CaSe (8 Kyu)
String.prototype.toAlternatingCase = function () {
  // Define your method here :)
  // return the correct string by:
  // splitting the string to letters
  // mapping the string to a new array but checking the case and changing it as we are doing it
  // join the string back
  return this.split('')
    .map((letter) =>
      letter === letter.toUpperCase()
        ? letter.toLowerCase()
        : letter.toUpperCase()
    )
    .join('');
};

// Find the first non-consecutive number (8 Kyu)
function firstNonConsecutive(arr) {
  // loop through the array
  for (let i = 0; i < arr.length - 1; i++) {
    // if the array doesn't match the previous array
    if (arr[i + 1] != arr[i] + 1) {
      // return the breaking array value
      return arr[i + 1];
    }
  }
  // if they are all consecutive return null
  return null;
}

// Return the day (8 Kyu)
function whatday(num) {
  // create a switch case function that returns the name of the day for a given num
  // if it's not a number (NaN) return "Wrong, please enter a number between 1 and 7"
  switch (num) {
    case 1:
      return 'Sunday';
    case 2:
      return 'Monday';
    case 3:
      return 'Tuesday';
    case 4:
      return 'Wednesday';
    case 5:
      return 'Thursday';
    case 6:
      return 'Friday';
    case 7:
      return 'Saturday';
    default:
      return 'Wrong, please enter a number between 1 and 7';
  }
}

// What is between? (8 Kyu)
function between(a, b) {
  // your code here
  let arr = [];
  // set the starting value of i == a since it's the lower bound
  // make the counter go all the way up to b's value
  for (let i = a; i < b + 1; i++) {
    // push i into the new array
    arr.push(i);
  }
  return arr;
}

// Multiplication table for number (8 kyu)

function multiTable(number) {
  // map the possible numbers to an array and then create the required string using string literals
  return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    .map((item) => `${item} * ${number} = ${item * number}`)
    .join('\n');
}

// Area or Perimeter (8 Kyu)
const areaOrPerimeter = function (l, w) {
  // Return your answer
  if (l == w) {
    return l * w;
  } else {
    return (l + w) * 2;
  }
};

// Array.diff (6 Kyu)

function arrayDiff(a, b) {
  // Filter through the array and only return the val of a if b does not include the value of a
  return a.filter((val) => !b.includes(val));
}

// Calculate Average (8 Kyu)

function findAverage(array) {
  // your code here
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }
  return array.length > 0 ? total / array.length : 0;
}

// Vowel Count (7 Kyu)
function getCount(str) {
  // create an array of the letters that count
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  // create a counter to keep track of the vowel amount
  let counter = 0;

  // loop through the string using a variable of i
  for (let i of str) {
    // create an if statement that checks if the string letter is inside the array of vowels
    if (vowels.includes(i)) counter++;
  }
  // return the counter
  return counter;
}

// Sort Numbers = (7 Kyu)

function solution(nums) {
  // if the array is not null, return the nums array sorted
  // else return an empty array []
  return nums !== null ? nums.sort((a, b) => a - b) : [];
}

// A wolf in sheep's clothing (8 Kyu) Kinda hard

function warnTheSheep(queue) {
  // check if the end of the queue's array is 'wolf'
  if (queue[queue.length - 1] === 'wolf') {
    // if 'wolf' return the next line
    return 'Pls go away and stop eating my sheep';
  } else {
    // return the index value of the wolf so you can put it in the string return
    let index = queue.findIndex((x) => x == 'wolf');
    // return a template string that returns a value = to the length of the queue - the index of the wolf - 1 since 0 index
    return `Oi! Sheep number ${
      queue.length - index - 1
    }! You are about to be eaten by a wolf!`;
  }
}

// Grasshopper - Array Mean (8 Kyu)

var findAverage = function (nums) {
  // Code here
  // create an average variable that takes nums and reduces it (adds it up) and then divide that by the length of nums (amount of values) to get the average
  const average = (nums = nums.reduce((a, b) => a + b) / nums.length);
  return average;
};

// Remove anchor from URL (7 Kyu)

function removeUrlAnchor(url) {
  // TODO: complete
  let split = url.split('');
  let adjusted = '';

  for (let i = 0; i < split.length; i++) {
    // if the character in the url is = too a #
    if (split[i] === '#') {
      // slice off the rest of the url at that index
      adjusted = split.splice(i);
    }
  }
  // return the joined original str
  return split.join('');
}

// Enumerable Magic #25 - Take the First N Elements

function take(arr, n) {
  // Your code here
  let split = arr.splice(n);
  return arr;
}

// Count characters in your string // 6 Kyu

function count(string) {
  // split the string and reduce the contents of that string with the total being the obj and the value being the character
  return string.split('').reduce(function (obj, s) {
    // that characters value is = to 0 and gains one if it's there
    obj[s] = (obj[s] || 0) + 1;
    // return the finished obj
    return obj;
  }, {});
}

// Pre-FizzBuzz Workout #1

function preFizz(n) {
  // create a new variable that is a new array to hold the numbers
  let output = new Array();
  // start the at the number one because the array always has a 1
  let num = 1;
  while (output.length < n) {
    // push the number to the array
    output.push(num);
    // add one to push the next number on the next loop
    num += 1;
  }
  return output;
}

// 5 without numbers !!

function unusualFive() {
  let five = 'abcde';
  return five.length;
}

// Check the exam 7 Kyu

function checkExam(array1, array2) {
  // good luck
  let count = 0;
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] == array2[i]) {
      // if it's right add four
      count = count + 4;
    } else if (array2[i] == '') {
      // check the student's answers for blanks
      count = count - 0;
    } else {
      // if it's wrong subtract a point
      count = count - 1;
    }
  }

  if (count < 0) {
    return 0;
  }

  return count;
}

// Sort Array by String Length (7 Kyu)

function sortByLength(array) {
  // Return an array containing the same strings, ordered from shortest to longest

  // sort the array from least to greatest using the sort higher order array method
  return array.sort((a, b) => a.length - b.length);
}

// Add Length (8 Kyu)
function addLength(str) {
  return str.split(' ').map((word) => `${word} ${word.length}`);
}

// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence (8 Kyu)
function replace(s) {
  //coding and coding....
  let regex = /[aeiou]/gi;

  return s.replace(regex, '!');
}
