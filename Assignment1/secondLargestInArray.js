// AKHILESH GOUTAM
// Find the second largest element in an array
function secondLargest(array) {
  "use strict";
  const MAX = Math.max.apply(null,array);
  let index = 0 , secondLargestElement = 0;
  for (index = 0; index < array.length; index++) {
    if ((array[index] !== MAX) && (secondLargestElement < array[index]))
      secondLargestElement = array[index];
  }
  return secondLargestElement;             
}
