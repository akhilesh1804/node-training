exports.getSecondLargestElement = (array) => {
	"use strict";
  const max = Math.max.apply(null,array);
  var secondMax = 0;
  for (let index = 0; index < array.length; index++) {
    if ((array[index] !== max) && (secondMax < array[index]))
      secondMax = array[index];   
  }
  return secondMax;
}
