var array = [];
array[0] = [3,56,7,32,9,14];
array[1] = [21, 87, 91, 31, 97, 59, 8, 83, 27, 23, 76, 72, 31, 91, 65, 77, 84, 27, 56, 59];
array[2] = [21, 87, 91, 31, 97, 59, 8, 83, 27, 23, 76, 72, 31, 91, 65, 77, 84, 92, 56, 59];
array[3] = [111, 0, 20, 0, 2];
//var val = [32, 91, 92, 20];   // Results for second largest

var string = [];
string[0] = "dummy";
string[1] = "dummy text";
string[2] = "shali is running fast";
string[3] = "u@#d$fkj$#!kds";

// result for frequency calculation
// var data = [];
//data[0] = { 'd': 1, 'u': 1, 'm': 2, 'y': 1 };
//data[1] = { 'd': 1, 'u': 1, 'm': 2, 'y': 1, 't': 2, 'e': 1, 'x': 1 };
//data[2] = { 's': 3, 'h': 1, 'a': 2, 'l': 1, 'i': 3, 'r': 1, 'u': 1, 'n': 3, 'g': 1, 'f': 1, 't': 1 };
//data[3] = { 'd': 2, 'f': 1, 'j': 1, 'k': 2, 's': 1, 'u': 1 };

      

var unlfatObject = { 
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


var flatObject = { 
  "flatJSON": false, 
  "i.am.not.so.flat": true, 
  "i.am.not.so.unflat": false, 
  "i.am.a": "tree", 
  "dates.0.day": 1, 
  "dates.1.day": 8947 
}

var sec_large = require('./getSecondLargestElementOfArray');
var cal_freq = require('./calculateFrequency');
var flat_obj = require('./flattenObject');
var unflat_obj = require('./unflattenObject');

console.log("***** getSecondLargestElement *****");
for (var i = 0; i < array.length; i++)
  console.log(sec_large.getSecondLargestElement(array[i]));

console.log("***** calculateFrequency *****");
for (var i = 0; i < string.length; i++) 
  console.log(cal_freq.fc(string[i]));

console.log("***** flattenObject *****");
console.log(flat_obj.flatten(unlfatObject));

console.log("***** unflattenObject *****");
console.log(unflat_obj.unflatten(flatObject));