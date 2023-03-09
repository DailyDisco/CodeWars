// Running sum of 1 D array (level 1)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  let lastSum = 0;
  return nums.map((x) => (lastSum += x));
};

// Find pivot index

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  //loop array
  //slice left and reduce
  //slice right and reduce
  //check if both are equal return index
  //if not return -1
  for (let i = 0; i < nums.length; i++) {
    let left = nums.slice(0, i).reduce((a, c) => a + c, 0);
    let right = nums.slice(i + 1, nums.length).reduce((a, c) => a + c, 0);
    if (left === right) {
      return i;
    }
  }
  return -1;
};

// 205. Isomorphic Strings (easy level)

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  // two string parameters
  // return true or false
  // egg = add ? true

  // check if the string is equal length to each other
  // if so check if it is isomorphic
  // if so return true;
  // if not return false

  let sEmpty = new Map();
  console.log(sEmpty);

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (!sEmpty.has(s[i])) {
      sEmpty.set(s[i], t[i]);
    } else {
      if (sEmpty.get(s[i]) !== t[i]) {
        console.log(sEmpty);
        return false;
      }
    }
  }
  // reread this
  return new Set([...sEmpty.values()]).size == sEmpty.size;
};

// The old switcheroo

function vowel2index(str) {
  //code me
  return str
    .split('')
    .map((e, i) => {
      if (e.match(/[AEIOU]/gi)) {
        e = i + 1;
      }
      return e;
    })
    .join('');
}

// 392. Is Subsequence

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length > t.length) return false;

  const tLength = t.length;
  const sLength = s.length;

  let count = 0;

  for (let i = 0; i < tLength; i++) {
    if (s[count] == t[i]) {
      count++;
    }
  }
  return count == sLength;
};

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
