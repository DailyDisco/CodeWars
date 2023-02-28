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
