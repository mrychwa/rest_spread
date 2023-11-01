//ES5 Function
function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
  }

const filterOutOdds = (...args) => args.filter((num) => num % 2 === 0);


  findMin
function findMin(...nums) {
  return Math.min(...nums);
}

const findMin = (...nums) => Math.min(...nums)


mergeObjects
function mergeObjects(obj1, obj2) {
  return {...obj1, ...obj2};
}

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});


//doubleAndReturnArgs
// function doubleAndReturnArgs(arr, ...nums){
//   const doubledNums = nums.map(function(num){
//     return num * 2
//   })
//   return [...arr, ...doubledNums];
// }

// const doubleAndReturnArgs = (arr, ...nums) => {
//   const doubledNums = nums.map(function(num){
//     return num * 2
//   })
//   return [...arr, ...doubledNums];
// }

const doubleAndReturnArgs = (arr, ...nums) => [...arr, ...nums.map((num) => num * 2)]



//Slice and Dice!

/** remove a random element in the items array
and return a new array without that item. */

// function removeRandom(items) {
//   const randomIndex = Math.floor((Math.random() * items.length));
//   items.splice(randomIndex, 1)
//   return [...items] 
// }

function removeRandom(items) {
  const randomIndex = Math.floor((Math.random() * items.length));
  return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)] 
}

const removeRandom = (items) => {
  const randomIndex = Math.floor((Math.random() * items.length));
  return [...items.slice(0, randomIndex), ...items.slice(randomIndex + 1)] 
}

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
  return [...array1, ...array2]
}

const extend = (array1, array2) => [...array1, ...array2]

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
  return {...obj, [key]: val };
}

const addKeyVal = (obj, key, val) => ({...obj, [key]: val })


/** Return a new object with a key removed. */

function removeKey(obj, key) {
  const newObj = {...obj};
  delete newObj[key];
  return newObj 
}

const removeKey = (obj, key) => {
  const newObj = {...obj};
  delete newObj[key];
  return newObj 
}

/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
  return {...obj1, ...obj2}
}

const combine = (obj1, obj2) => ({...obj1, ...obj2})

/** Return a new object with a modified key and value. */

// function update(obj, key, val) {
//   return {...obj, [key]: val };
// }

const update = (obj, key, val) => ({...obj, [key]: val })
