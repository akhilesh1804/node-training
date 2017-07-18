"use strict";
exports.unflatten = (flatObject) => {
  const object = {};
  for ( let x in flatObject) {
    var array = x.split(".");
    unflattenFunction(object, array, flatObject[x]);
  }
  return object;
}
function unflattenFunction (object, array, val) {
  for (let index = 0; index < array.length - 1; index++) {
    if (!(array[index] in object))
      /\d/g.test(array[index + 1]) ? object[array[index]] = [] : object[array[index]] = {};
      object = object[array[index]];
  }
  object[array[array.length -1 ]] = val;
}
