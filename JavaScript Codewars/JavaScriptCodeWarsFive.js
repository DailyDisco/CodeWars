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
