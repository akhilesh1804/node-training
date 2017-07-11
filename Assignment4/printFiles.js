var fs = require('fs');
var callback = function (err, content) {
  //if(err) throw err;
  console.log(content);
  console.log("============");
}
var arr = ['File1.txt', 'File2.txt', 'File3.txt', 'File4.txt', 'File5.txt'];
for (var i = 0; i < arr.length; i++) {
  fs.readFile(arr[i], 'utf8', callback);
}
console.log("============");