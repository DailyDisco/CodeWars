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

// Opposite number - 8 Kyu Javascript
function opposite(number) {
  // P = number of type int negative and positive
  // R = return the opposite of the number
  // E = -1 = 1, -1 = 1
  // P = get the number and return the - if more than or equal to 0, return the - if less than 0 or negative

  //your code here
  return number >= 0 ? -number : number * -1;
}

// Sum of positive - 8 Kyu Javascript
function positiveSum(arr) {
  // P = An array of numbers = [1, 2, 3]
  // R = sum of all the positive numbers and if there is nothing to sum return 0
  // E = [1,-4,7,12] => 1 + 7 + 12 = 20
  // P = Get the number and filter out non positive numbers, then reduce the array to get the sum

  return arr.filter((x) => x > 0).reduce((acc, cum) => acc + cum, 0);
}

// Persistent Bugger - 6 Kyu Javascript
function persistence(num) {
  //code me

  // set a count to keep track of how many times you've multiplied
  let count = 0;

  // while the number is not a single digit value do this
  while (num.toString().split('').length !== 1) {
    // set number = to the value of multiplying each of its values
    num = num
      .toString()
      .split('')
      .reduce((a, b) => a * b);
    // update the multiplication counter
    count++;
  }
  return count;
}

// Terminal Game Move Function - 8 Kyu
function move(position, roll) {
  // return the new position
  // P = An Int Position, and a Int Roll
  // R = The new Position of the player
  // E = Player at position 3, and player rolls a 6. 3 + (6 * 2) = 15
  // P = Take the roll, and multiply it by two and add it to the starting position.

  return roll * 2 + position;
}

// Count the Digit - 7 Kyu
function nbDig(n, d) {
  //
  // P = N = an Int greater than or equal to 0, and D, an Int = to or between 0 and 9
  // R = The amount of times that d is used in the squared digits, including if it's more than once in the same digit.
  // E = n = 11011, d = 2;
  // P
  let count = 0;
  let squaredNumber = 0;

  // Loop through all the values between 0 and including n
  for (let i = 0; i <= n; i++) {
    // Square the number that you are currently on
    squaredNumber = i ** 2;

    // Convert the number into a string so that you can split it to loop through it later.
    let splitNumber = squaredNumber.toString().split('');

    // Loop through all the digits in the product and increase the count if it includes variable = d
    for (num of splitNumber) {
      num.includes(d) ? count++ : null;
    }
  }

  return count;
}

// Beginner Series #2 Clock - Level 8 Kyu
function past(h, m, s) {
  let total = 0;

  let hoursToMilli = h * 60 * 60 * 1000;

  let minutesToMilli = m * 60 * 1000;

  let secondsToMilli = s * 1000;

  total = hoursToMilli + minutesToMilli + secondsToMilli;

  return total;
}

// List Filtering - 7 Kyu Javascript
function filter_list(l) {
  // Return a new array with the strings filtered out
  // P - A list of non-negative integers (x >= 0) and strings
  // R - Returns a new list (array) with the strings filtered out
  // E - filter_list([1,2,'a','b']) == [1,2] = Take out strings
  // P - filter through the list and check the typeof the value and if it's a string pop it

  let array = [];

  for (value of l) {
    if (typeof value === 'number') {
      array.push(value);
    }
  }

  return array;
}

function bouncingBall(h, bounce, window) {
  // your code here
  let count = 0;
  let height = 0;

  // h height, bounce = int, window = int
  if (h > 0 && bounce < 1 && bounce > 0 && window < h) {
    count = 1;

    // how many times will the ball fall through the view of the window?

    // Update the height remaining after each bounce
    height = h * bounce;

    // while that updated height is greater than window
    // keep a count of the ball falling up and down the window each time
    // also set the new height
    while (height > window) {
      count = count + 2;
      height = height * bounce;
    }

    return count;
  } else {
    return -1;
  }
}

function SeriesSum(n) {
  // Happy Coding ^_^
  // P = n = int
  // R = return the nth term of the series
  // E =
  //     n
  //     1 --> 1 --> "1.00"
  //     2 --> 1 + 1/4 --> "1.25"
  //     5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

  let count = 0;

  for (let i = 0; i < n; i++) {
    if (n == 1) {
      return n.toFixed(2);
    }

    count = count + 1 / (i * 3 + 1);

    console.log(count, 'count after 0');
  }

  return count.toFixed(2);
}

function minMax(arr) {
  // P = An array, that has the min and max value, sometimes the array has 1 and it is both the min and max
  // R = An array with the minimum and maximum number = [min, max]
  // E = [2334454,5] --> [5,2334454], [1]         --> [1,1]
  // P = if the array has one value that is the min and max

  let min = arr[0];
  let max = arr[0];

  if (arr.length == 1) {
    return [arr[0], arr[0]];
  }

  if (arr.length > 1) {
    console.log(arr);
    for (num of arr) {
      console.log(num);

      min = num < min ? (min = num) : min;
      console.log(min);

      // Keep track of highest number
      max = num > max ? (max = num) : max;
    }
  }

  return [min, max]; // fix me!
}

// 7 Kyu Max Diff - Easy
function maxDiff(list) {
  if (!list.length) return 0;

  return Math.max(...list) - Math.min(...list);
}
