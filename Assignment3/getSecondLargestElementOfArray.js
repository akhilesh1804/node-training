exports.getSecondLargestElement = function (array) {
	var max = Math.max.apply(null,array);
	var max2 = 0;
	for (var index = 0; index < array.length; index++) {
		if (array[index] == max)
          continue;
    	else {
          if(max2 < array[index])
            max2 = array[index];
      	} 
	}
	
	return max2;
}