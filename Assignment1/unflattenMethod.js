"use strict";
function unflatten(flatObject) {
  const unflatObject = {};
  for (let key in flatObject) {
    let array = key.split(".");
    myMethod(unflatObject, array, flatObject[key]);
  } 
  return unflatObject;
}
function myMethod (unflatObject, array, value) {
  for (let index = 0; index < array.length - 1; index++) {
    if (!(array[index] in unflatObject)) {
      /\d/g.test(array[index + 1]) 
      ? unflatObject[array[index]] = []
      : unflatObject[array[index]] = {};
    }
      unflatObject = unflatObject[array[index]];
  }
  unflatObject[array[array.length - 1]] = value;
}
