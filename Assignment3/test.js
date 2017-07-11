const array = [];
array[0] = [3, 56, 7, 32, 9, 14];
array[1] = [21, 87, 91, 31, 97, 59, 8, 83, 27, 23, 76, 72, 31, 91, 65, 77, 84, 27, 56, 59];
array[2] = [21, 87, 91, 31, 97, 59, 8, 83, 27, 23, 76, 72, 31, 91, 65, 77, 84, 92, 56, 59];
array[3] = [111, 0, 20, 0, 2];

const string = ["dummy", "dummy text", "shali is running fast", "u@#d$fkj$#!kds"];
     
const unlfatObject = { 
  "flatJSON": false, 
  "i": { 
    "am": { 
      "not": { 
        "so": { 
          "flat": true, "unflat": false 
        } 
      }, 
      "a": "tree" 
    } 
  }, 
  "dates": [ { "day": 1 }, { "day": 8947 } ] };


const flatObject = { 
  "flatJSON": false, 
  "i.am.not.so.flat": true, 
  "i.am.not.so.unflat": false, 
  "i.am.a": "tree", 
  "dates.0.day": 1, 
  "dates.1.day": 8947 
}

const secondLargest = require('./getSecondLargestElementOfArray');
const frequency = require('./calculateFrequency');
const flatObj = require('./flattenObject');
const unflatObj = require('./unflattenObject');

console.log("***** getSecondLargestElement *****");
for (var i = 0; i < array.length; i++)
  console.log(secondLargest.getSecondLargestElement(array[i]) + "\n");

console.log("***** calculateFrequency *****");
for (var i = 0; i < string.length; i++) 
  console.log(frequency.calculateFrequency(string[i]) + "\n");

console.log("***** flattenObject *****");
console.log(flatObj.flatten(unlfatObject) + "\n");

console.log("***** unflattenObject *****");
console.log(unflatObj.unflatten(flatObject));