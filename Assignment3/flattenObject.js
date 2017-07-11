exports.flatten = function (unflatObject) {
	var obj = {};
  	for(var x in unflatObject) {
      var str = String();
      typeof unflatObject[x] != 'object' ? obj[x] = unflatObject[x] : flattenMethod(obj, unflatObject[x], str += x);
    }
    return obj;
}

function flattenMethod(obj, y, str) {
  for(var x in y) {
    typeof y[x] != 'object' ? obj[ str + "." +x ] = y[x] : flattenMethod(obj, y[x], str + "." + x);
  }
}