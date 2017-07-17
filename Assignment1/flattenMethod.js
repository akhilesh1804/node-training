"use strict";
function flatten(unflatObject) {
  const flatObject = {};
  for (let key in unflatObject) {
    var str = String();
    if (typeof unflatObject[key] !== 'object') {
      flatObject[key] = unflatObject[key];
      continue;
    }
    flattenMethod(flatObject, unflatObject[key], str += key);
  }
  return flatObject;
}

function flattenMethod(flatObject, y, str) {
  for (let key in y) {
    if (typeof y[key] !== 'object') {
      flatObject[str + "." + key] = y[key];
      continue;
    }
    flattenMethod(flatObject, y[key], str + "." + key);
  }
}
