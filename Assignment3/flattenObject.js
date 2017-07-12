exports.flatten = function (unflatObject) {
  const object = {};
    for(var x in unflatObject) {
      var str = String();
      typeof unflatObject[x] != 'object' ? object[x] = unflatObject[x] : flattenMethod(object, unflatObject[x], str += x);
    }
    return object;
}

function flattenMethod(object, y, str) {
  for(var x in y) {
    typeof y[x] != 'object' ? object[ str + "." +x ] = y[x] : flattenMethod(object, y[x], str + "." + x);
  }
}
