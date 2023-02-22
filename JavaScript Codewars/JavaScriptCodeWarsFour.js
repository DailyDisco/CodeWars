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
  // in the curley braces, make sure its 4 to 16 characters
  res = /^[a-z0-9_]{4,16}$/.test(username);
  return res;
}
