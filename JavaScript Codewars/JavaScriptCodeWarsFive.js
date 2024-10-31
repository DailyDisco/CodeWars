// Are they the "same"? (6 kyu) (JavaScript)

function comp(array1, array2) {
  // check if there are any arrays
  // check to make sure the array lengths are the same
  if (!array1 || !array2 || array1.length !== array2.length) return false;
  // if they pass the checks
  // return the first array squared and sorted
  // then compare it to the sorted array2
  // compare them as strings for simplicity
  return (
    array1
      .map((x) => x * x)
      .sort()
      .toString() === array2.sort().toString()
  );
}

// Disarium Number (Special Numbers Series #3) (7 Kyu) (JavaScript)

function disariumNumber(n) {
  //your code here

  // p = n number
  // r = "Disarium !!" or "Not !!"
  // e = 89 "Disarium !!" 8^1 + 9^2 = 89
  // p
  // power each digit with its respective position
  // add the powered digits together
  // check if it's equal to the number itself

  let arr = n
    .toString()
    .split('')
    .map((x, i) => Math.pow(Number(x), i + 1))
    .reduce((a, b) => a + b);

  return arr == n ? 'Disarium !!' : 'Not !!';
}

// Return String of First Characters (7 Kyu) (JavaScript)
function makeString(s) {
  // ...
  let splitS = s.split(' ');

  return splitS.map((word) => word.slice(0, 1)).join('');
}
// Safen User Input Part I - htmlspecialchars (8 Kyu) (JavaScript)
function htmlspecialchars(formData) {
  // Insert your code here
  console.log(formData);
  let arr = [];

  // loop through the form entry
  for (let i = 0; i < formData.length; i++) {
    // if the data = < push its specialchars counterpart
    if (formData[i] == '<') {
      arr.push('&lt;');
      // if the data = > push its specialchars counterpart
    } else if (formData[i] == '>') {
      arr.push('&gt;');
      // if the data = " push its specialchars counterpart
    } else if (formData[i] == '"') {
      arr.push('&quot;');
      // if the data = & push its specialchars counterpart
    } else if (formData[i] == '&') {
      arr.push('&amp;');
      // if the data is anything else push the data
    } else {
      arr.push(formData[i]);
    }
  }
  // join the array at the end to get a string
  return arr.join('');
}

// Break camelCase (6 Kyu) (JavaScript)
function solution(string) {
  // split strings so that you can loop through them
  let splitString = string.split('');
  let capitalString = string.toUpperCase().split('');
  // create a new string to include the split spaces
  let newString = string.split('');

  // the counter = to the length of splitString and then move backwards to 0
  for (i = splitString.length - 1; i >= 0; i--) {
    // if the string is capital
    if (splitString[i] == capitalString[i]) {
      // splice the string at that index and add a space
      newString.splice(i, 0, ' ');
    }
  }
  // return the joined array
  return newString.join('');
}

// Two to One 7 Kyu Javascript

function longest(s1, s2) {
  // separate the string
  // join the two separated strings
  // remove any duplicates
  // sort the string
  // your code
  let separatedStringOne = s1.slice('');
  let separatedStringTwo = s2.slice('');

  let joinedSeparatedArray = separatedStringOne.concat(separatedStringTwo);
  console.log(joinedSeparatedArray);

  return [...new Set(joinedSeparatedArray)].sort().join('');
}

// Sum of Triangular Numbers 7 Kyu Javascript

function sumTriangularNumbers(n) {
  // if you get a negative number return 0
  if (n < 0) {
    return 0;
  }

  // start a counter
  let total = 0;

  // loop through the n total
  for (let i = 1; i <= n; i++) {
    total += (i * (i + 1)) / 2;
    console.log(total);
  }
  return total;
}

// What's the real floor? 8 Kyu Javascript

function getRealFloor(n) {
  if (n > 12) {
    return n - 2;
  } else if (n > 0) {
    return n - 1;
  } else {
    return n;
  }
}

// Is there a vowel in there? 8 Kyu Javascript
function isVow(a) {
  // use regex of vowels to test if the fromCharCode value of x in a is a vowel and return the vowel if it is in the new array
  return a.map((x) =>
    /[aeiou]/.test(String.fromCharCode(x)) ? String.fromCharCode(x) : x
  );
}

// Training JS #10: loop statement --for 8 Kyu
function pickIt(arr) {
  var odd = [],
    even = [];
  //coding here
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }

  return [odd, even];
}

// Alternate capitalization 7 Kyu Javascript
function capitalize(s) {
  let evenCap = '';
  let oddCap = '';

  for (let i = 0; i < s.length; i++) {
    if (i % 2 == 0) {
      evenCap += s[i].toUpperCase();
      oddCap += s[i];
    } else {
      oddCap += s[i].toUpperCase();
      evenCap += s[i];
    }
  }

  return [evenCap, oddCap];
}

// Even numbers in an array 7 Kyu Javascript
function evenNumbers(array, number) {
  // good luck

  let finalArr = [];

  // reverse the array to access the last even numbers
  let reversedArray = array.reverse();

  console.log(reversedArray);
  for (let i = 0; i < array.length; i++) {
    // check if the array value is even or odd
    // if the length of the array is equal to the number given stop
    if ((array[i] % 2 == 0) & (finalArr.length != number)) {
      // push the value to a new array
      finalArr.push(array[i]);
    }
  }
  // reverse the final array to return the original order
  return finalArr.reverse();
}

// Training JS #6: Basic data types--Boolean and conditional statements if..else 8 Kyu Javascript

function trueOrFalse(val) {
  if (val) return true;
  return false;
}

// No zeros for heros 8 Kyu Javascript
function noBoringZeros(n) {
  // your code
  // get rid of all 0s at the end of a number ex 1000, vs 1010
  let splitN = n.toString();
  let regex = /0+$/gi;

  return +splitN.replace(regex, '');
}

// Are arrow functions odd? 8 Kyu Javascript

function odds(values) {
  // arrow it
  return values.filter((x) => x % 2 == 1);
}

// Switcheroo 7 Kyu Javascript

function switcheroo(x) {
  console.log(x);
  console.log(x.split(''));

  let splitX = x.split('');
  let newArr = [];

  for (letter of splitX) {
    if (letter == 'a') {
      newArr.push('b');
    } else if (letter == 'b') {
      newArr.push('a');
    } else {
      newArr.push(letter);
    }
  }
  return newArr.join('');
}
// UEFA EURO 2016 8 Kyu Javascript
function uefaEuro2016(teams, scores) {
  if (scores[0] > scores[1]) {
    return (
      'At match ' + teams[0] + ' - ' + teams[1] + ', ' + teams[0] + ' won!'
    );
  } else if (scores[1] > scores[0]) {
    return (
      'At match ' + teams[0] + ' - ' + teams[1] + ', ' + teams[1] + ' won!'
    );
  } else {
    return (
      'At match ' + teams[0] + ' - ' + teams[1] + ', ' + 'teams played draw.'
    );
  }
  // your code...
}

// Function 1 - hello world - 8 Kyu Javascript
function greet() {
  return 'hello world!';
}

// Convert boolean values to strings 'Yes' or 'No' - 8 Kyu Javascript
function boolToWord(bool) {
  // P boolean value
  // R Returns a string "Yes" or "No"
  // E
  // P If the bool is true return "Yes" else return "No"
  //...

  return bool === true ? 'Yes' : 'No';
}

// The Feast of Many Beasts - 8 Kyu Javascript
function feast(beast, dish) {
  //your function here
  // P - Two Strings - name of beast and name of dish
  // R - true if the name of the dish and beast both start and end with the
  //      same letters, and false if they do not
  // E - "great blue heron" "garlic naan" g and n = true
  //           "brown bear", "bear claw" = false because b & r and then b & c
  // P - if the first letter and the last letter of both beast and dish are
  //    the same, return true, else return false

  let firstBeastLetter = beast.slice(0, 1);
  console.log(firstBeastLetter);
  let lastBeastLetter = beast.slice(beast.length - 1);
  console.log(lastBeastLetter);

  let firstDishLetter = dish.slice(0, 1);
  let lastDishLetter = dish.slice(dish.length - 1);

  if (
    firstBeastLetter == firstDishLetter &&
    lastBeastLetter == lastDishLetter
  ) {
    return true;
  } else if (
    firstBeastLetter !== firstDishLetter ||
    lastBeastLetter !== lastDishLetter
  ) {
    return false;
  }
}

// Total amount of points - 8 Kyu Javascript
function points(games) {
  // P An array of strings ["", "", ""]
  // R Returns the number of points team x got in the championship
  // E ["3:1", "2:2", "0:1"]
  // P Check if the X won the game or not and assign the correct amount of points based
  //.  off the results (3 for W, 0 for L, 1 for Tie)
  let totalPointsX = 0;

  // don't need this because the values are reset with each loop
  // let value1 = 0;
  // let value2 = 0;

  for (string of games) {
    console.log(string);
    console.log(typeof string);
    let value1 = string.charAt(0);
    let value2 = string.charAt(string.length - 1);

    console.log(value1, 'value1');
    console.log(value2, 'value2');

    if (+value1 > +value2) {
      totalPointsX = totalPointsX + 3;
    } else if (+value1 < value2) {
      totalPointsX = totalPointsX;
    } else if (+value1 == +value2) {
      totalPointsX = totalPointsX + 1;
    }
  }
  console.log(totalPointsX, 'totalPointsX');

  return totalPointsX;
}

// Sentence Smash
function smash(words) {
  // P = An array of words ["", "", ""]
  // R = Returns a string sentence ""
  // E = ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
  // P = Connect all the words in the array into one string

  return (sentence = words.join(' '));
}

// Sum Array = 8 Kyu Javascript
function sum(numbers) {
  // P = An array of numbers
  // R = Returns the sum of the numbers
  // E Input: [1, 5.2, 4, 0, -1], Output: 9.2
  // P Take the array and add all the numbers up and return the total as a number

  return numbers.reduce((acc, cum) => acc + cum, 0);
}

// Convert a string to a number! = 8 Kyu Javascript
const stringToNumber = function (str) {
  // P = A string ""
  // R = Return a number X
  // E "1234" => 1234
  // P = get the string and turn it into a number

  // put your code here
  return +str;
};

// Reversed sequence 8 Kyu Javascript
const reverseSeq = (n) => {
  // P = A value n that is an int
  // R = Returns an array of integers from n to 1 where n > 0
  // E = n = 5, [5, 4, 3, 2, 1]
  // P = Loop through the number n and push the numbers to a new array
  let newArray = [];

  for (let i = 1; i <= n; i++) {
    newArray.push(i);
  }

  return newArray.reverse();
};

// Square Every Digit 7 Kyu Javascript
function squareDigits(num) {
  // P = A number int
  // R = Square the number
  // E = 9119 = 811181 = 9 * 9 = 81, 1*1 = 1 = 811181
  // P = Take the value of every number and square it then combine the answers

  let splitNum = num.toString().split('');

  let squaredNumsArray = [];

  for (num of splitNum) {
    squaredNumsArray.push(num * num);
    console.log(squaredNumsArray);
  }

  const finalAnswer = +squaredNumsArray.join('');
  console.log(squaredNumsArray.join(''), 'joined squared Array');
  console.log(splitNum);

  return finalAnswer;
}
