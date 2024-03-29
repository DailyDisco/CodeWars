// opposite number

const { Html } = require('next/document');

function opposite(number) {
  //your code here
  return 0 - number;
}

// Third Angle of a Triangle

function otherAngle(a, b) {
  return 180 - (a + b);
}

// Anagram Detection

// write the function isAnagram
var isAnagram = function (test, original) {
  let anagram = test.toLowerCase().split('').sort().join('');

  let originalAna = original.toLowerCase().split('').sort().join('');

  return anagram == originalAna ? true : false;
};

// Grasshopper - Messi Goals

var laLigaGoals = 43;
var championsLeagueGoals = 10;
var copaDelReyGoals = 5;

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;

// is it a palindrome?

function isPalindrome(x) {
  // your code here
  let regexSpaces = /[\W_]/gi;

  let lowerCase = x.toLowerCase().replace(regexSpaces, '');

  let stringReversed = lowerCase.split('').reverse().join('');

  return stringReversed === lowerCase;
}

// Century From Year

function century(year) {
  // Finish this :)

  return Math.floor((year - 1) / 100 + 1);
}

// Name Shuffler

function nameShuffler(str) {
  //Shuffle It

  return str.split(' ').reverse().join(' ');

  // 1st try
}

// Returning Strings

function greet(name) {
  return 'Hello, ' + name + ' how are you doing today?';
  //your code here
}

// Find the capitals

var capitals = function (word) {
  let empty = [];

  for (let i = 0; i < word.length; i++) {
    // this next piece of code will check if a capital letter is equal to that same letter in the original array
    if (word[i].toUpperCase() == word[i]) {
      empty.push(i);
      // if the letter matches then we push it to the new empty array
    }
  }
  return empty;
};

// Testing 1-2-3

var number = function (array) {
  //your awesome code here

  let finalArr = [];

  for (let i = 0, j = 1; i < array.length; i += 1) {
    // here we set two variables i for the location in the array, and j for the number of the line we are on
    if (array.length === 0) {
      return 'Empty array should return empty string';
    } else {
      finalArr.push(`${j}: ${array[i]}`);
      j += 1;
    }
  }
  return finalArr;
};

//  Grasshopper - Terminal game move function Level 8

function move(position, roll) {
  // return the new position

  return position + roll * 2;
}

//  List Filtering Level 7

function filter_list(l) {
  // Return a new array with the strings filtered out
  let filteredArr = [];

  for (let i = 0; i < l.length; i++) {
    if (typeof l[i] != 'string') {
      filteredArr.push(l[i]);
    }
  }
  return filteredArr;
}

// Count by X Level 8

function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) z.push(x * i);
  return z;
}

// if you can't sleep count sheep level 8

var countSheep = function (num) {
  //your code here

  let str = '';

  for (let i = 1; i <= num; i++) {
    str += `${i} sheep...`;
  }
  return str;

  return;
};

// Plural Level 8

function plural(n) {
  // ...
  return n !== 1;
}

// Switch it Up! Level 8

function switchItUp(number) {
  //Write your own Code!
  //let's create an index so that we may access it using the argument being passed in the input
  let words = [
    'Zero',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
  ];
  //this will return the given value in the give arguments index
  return words[number];
}

// Welcome! 8 kyu

function greet(language) {
  const languages = [
    {
      english: 'Welcome',
      czech: 'Vitejte',
      danish: 'Velkomst',
      dutch: 'Welkom',
      estonian: 'Tere tulemast',
      finnish: 'Tervetuloa',
      flemish: 'Welgekomen',
      french: 'Bienvenue',
      german: 'Willkommen',
      irish: 'Failte',
      italian: 'Benvenuto',
      latvian: 'Gaidits',
      lithuanian: 'Laukiamas',
      polish: 'Witamy',
      spanish: 'Bienvenido',
      swedish: 'Valkommen',
      welsh: 'Croeso',
    },
  ];

  return languages[0][language] === undefined
    ? 'Welcome'
    : languages[0][language];
}

// Sum The Strings

function sumStr(a, b) {
  return Number(a) + Number(b) + '';
  // by adding a string to this, the whole return becomes a string type
}

// Round up to the next multiple of 5 ( 7 Kyu )

function roundToNext5(n) {
  // ...
  return Math.ceil(n / 5) * 5;
}

// Beginner Series #1 School Paperwork ( 8 Kyu )

function paperwork(n, m) {
  return n < 0 || m < 0 ? 0 : n * m;
}

// Remove the minimum ( 7 Kyu )

function removeSmallest(numbers) {
  // use slice to move everything into a new array so that we don't alter the original array
  let result = numbers.slice(0);

  // start splicing at the index witht the lowest number in the numbers array
  result.splice(numbers.indexOf(Math.min(...numbers)), 1);
  // return the new lowest value in a array
  return result;
}

// A Needle in the Haystack (Level 8 Kyu)

function findNeedle(haystack) {
  return 'found the needle at position ' + haystack.indexOf('needle');
  // your code here
}

// Grasshopper - Terminal game combat function (8 kyu)

function combat(health, damage) {
  // Write your code here
  return health > damage ? health - damage : 0;
}

// Lario and Muigi Pipe Problem (8 Kyu)

function pipeFix(numbers) {
  let arr = [];
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    arr.push(i);
  }
  return arr;
}

// String repeat (8 kyu)

function repeatStr(n, s) {
  return s.repeat(n);
}

// Sum Mixed Array (8 kyu)

function sumMix(x) {
  return x.reduce((x, y) => Number(x) + Number(y), 0);
}

//  Drink about

function peopleWithAgeDrink(old) {
  if (old <= 13) {
    return 'drink toddy';
  } else if (old <= 17) {
    return 'drink coke';
  } else if (old < 21) {
    return 'drink beer';
  } else {
    return 'drink whisky';
  }
}

// Double Char (8 kyu)

function doubleChar(str) {
  var word = '';
  for (var i = 0; i < str.length; i++) {
    word = word + str[i] + str[i];
  }
  return word;
}

// Return Negative (8 kyu)

function makeNegative(num) {
  // Code?
  return num > 0 ? -+num : num;
}

// Extract the domain name from a URL (5 kyu)

function domainName(url) {
  // let us replace everything but the domain name of a URL then return the url with only the domain name.
  url = url.replace('https://', '');
  url = url.replace('http://', '');
  url = url.replace('www.', '');

  // splits everything after the domain name ex: .com .com/carbonfive/raygun etc..
  return url.split('.')[0];
  //your code here
}

//
function descendingOrder(n) {
  return parseInt(String(n).split('').sort().reverse().join(''));
  //...
}

// Friend or Foe?

function friend(friends) {
  //your code here
  // create a new function using the filter method to filter out anything that is not equal to four characters
  return friends.filter((el) => el.length == 4);
}

// Number of People in the Bus (7 kyu)

var number = function (busStops) {
  let ontoCount = 0;
  let offCount = 0;
  // Good Luck!

  for (let i = 0; i < busStops.length; i++) {
    ontoCount += busStops[i][0];
    offCount += busStops[i][1];
  }
  return ontoCount - offCount;
};

// Factorial (7 kyu)

function factorial(n) {
  // Calculate the factorial here
  if (n === 0) {
    return 1;
  } else if (n < 0 || n > 12) {
    throw new RangeError('Error');
  } else {
    return n * factorial(n - 1);
  }
}

// Calculating with Functions (5 kyu wow)

function expression(number, operation) {
  if (!operation) return number;
  return operation(number);
}

function expression(number, operation) {
  if (!operation) return number;
  return operation(number);
}

function zero(operation) {
  return expression(0, operation);
}
function one(operation) {
  return expression(1, operation);
}
function two(operation) {
  return expression(2, operation);
}
function three(operation) {
  return expression(3, operation);
}
function four(operation) {
  return expression(4, operation);
}
function five(operation) {
  return expression(5, operation);
}
function six(operation) {
  return expression(6, operation);
}
function seven(operation) {
  return expression(7, operation);
}
function eight(operation) {
  return expression(8, operation);
}
function nine(operation) {
  return expression(9, operation);
}

function plus(x) {
  return function (y) {
    return y + x;
  };
}
function minus(x) {
  return function (y) {
    return y - x;
  };
}
function times(x) {
  return function (y) {
    return y * x;
  };
}
function dividedBy(x) {
  return function (y) {
    return Math.floor(y / x);
  };
}

// Binary Addition (7 kyu)

function addBinary(a, b) {
  return (a + b).toString(2);
}

// N-th Power

function index(array, n) {
  //your code here
  if (array.length <= n || 0 > n) {
    return -1;
  } else {
    return Math.pow(array[n], n);
  }
}

// Replace With Alphabet Position 6 Kyu

function alphabetPosition(text) {
  // set an empty string
  results = '';

  // loop through the array
  for (let i = 0; i < text.length; i++) {
    // set letter that you are picking (when capitalized) to the charCodeAt() method
    let letter = text.toUpperCase().charCodeAt(i);
    // if that character is outside of the alphabet subtract 64 from the character codes so that you return a number
    // make sure that you set a string at the end to space out the results
    if (letter < 91 && letter > 64) results += letter - 64 + ' ';
  }
  // slice the first letter and replice it with the character code
  return results.slice(0, results.length - 1);
}
