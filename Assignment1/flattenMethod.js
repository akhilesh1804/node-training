function flatten(unflatObject) {
  // Write your code here
  var obj = {};
  for(var x in unflatObject) {
    var str = String();
    if (typeof unflatObject[x] != 'object') {
      obj[x] = unflatObject[x];
    }
    else {
      str += x;
      flattenMethod(obj , unflatObject[x] , str);
    }
  }
  console.log(obj);
  return obj;
  }

  function flattenMethod(obj , y , str) {
    console.log(str);
    for(var x in y) {
      if(typeof y[x] != 'object') {
        obj[ str + "." +x ] = y[x];
      }
      else {  
        flattenMethod(obj , y[x] , str + "." + x);
      }
    }
  }