exports.unflatten = function (flatObject) {
  const object = {};
  for ( var x in flatObject) {
    var array = x.split(".");
    unflattenFunction(object, array, flatObject[x]);
  }
  return object;
}
function unflattenFunction (object, array, val) {
  for (var i = 0; i < array.length-1; i++) {
    if(!(array[i] in object))
      /\d/g.test(array[i+1]) ? object[array[i]] = [] : object[array[i]] = {};
      object = object[array[i]];
  }
  object[array[array.length-1]] = val;
}
