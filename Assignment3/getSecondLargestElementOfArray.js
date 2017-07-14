exports.getSecondLargestElement = function (array) {
  const max = Math.max.apply(null,array);
  var secondMax = 0;
  for (var index = 0; index < array.length; index++) {
    if (array[index] === max)
      continue;
    if(secondMax < array[index])
      secondMax = array[index];
  }
  
  return secondMax;
}
