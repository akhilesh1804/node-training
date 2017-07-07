// AKHILESH GOUTAM
// Find the second largest element in an array

function secondLargest(array) {
  var mx = Math.max.apply(null,array);
  var i=0 , max2=0;
  for(i=0 ; i < array.length ; i++) {
    if (array[i]==mx)
      continue;
    else
      {
        if(max2 < array[i])
          max2=array[i];
      }
  }
  return max2;
             
}
