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
