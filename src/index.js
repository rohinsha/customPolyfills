//forEach polyfill
if (!Array.prototype.customForEach) {
  Array.prototype.customForEach = function (cb) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i, this);
    }
  };
}
let j = [2, 3, 4, 5, 6, 7, 8, 9];
let l = j.customForEach((item, ind, arr) => {
  console.log(`${item} Item and ${ind} index - custom foreach`);
});

//---------------------------------------

//map polyfill

if (!Array.prototype.customForMap) {
  Array.prototype.customForMap = function (cb) {
    let resArr = [];
    for (let i = 0; i < this.length; i++) {
      resArr.push(cb(this[i], i, this));
    }
    return resArr;
  };
}
let arr2 = [2, 3, 4, 5, 6, 7, 8, 9];
let newArr = arr2.customForMap((item, ind, arr) => {
  return item * 2;
});
console.log(newArr + "custom map polyfill");

//------------------------------------------------------

//filter polyfill
if (!Array.prototype.customFilter) {
  Array.prototype.customFilter = function (callback) {
    var newArray = [];
    // iterate array elements
    for (let item of this) {
      // pass each element to callback and if elements that pass the test push response to new array
      if (callback.call(this, item)) {
        newArray.push(item);
      }
    }
    // return final array
    return newArray;
  };
}

// declare an array
const numbers = [1, 2, 3, 4];
// call custom filter() on array to filter even numbers
const evens = numbers.customFilter((item) => item % 2 === 0);
// prints [2,4]
console.log(evens);

Polyfill of reduce

if (!Array.prototype.customReduce) {
  Array.prototype.customReduce = function (callback, initialValue) {
    let firstIndex;
    let acc;
    if (arguments.length == 1) {
      firstIndex = 1;
      acc = arguments[0];
    } else {
      firstIndex = 0;
      acc = initialValue;
    }

    for (let i = firstIndex; i < this.length; i++) {
      acc = callback(acc, this[i], i);
    }
    return acc;
  };
}

let p = [3, 3, 4];

let r = p.customReduce((acc, num) => acc + num, 0);

console.log(r);
