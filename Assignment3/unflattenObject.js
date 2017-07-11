exports.unflatten = function (flatObject) {
  var obj = {};
  for ( var x in flatObject) {
    var arr = x.split(".");
    myMethod(obj, arr, flatObject[x]);
  }
  return obj;
}
function myMethod (obj, arr, val) {
  for (var i = 0; i < arr.length-1; i++) {
    if(!(arr[i] in obj))
      /\d/g.test(arr[i+1]) ? obj[arr[i]] = [] : obj[arr[i]] = {};
      obj = obj[arr[i]];
  }
  obj[arr[arr.length-1]] = val;
}