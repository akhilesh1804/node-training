exports.fc = function (string) {
  var freq = {};
  var char;
  string = string.replace(/\s/g,'');
  for (var index = 0; index < string.length; index++) {
    char=string[index];
    if(/[a-z]/.test(char) )
      freq[char] ? freq[char]++ : freq[char] = 1 ;
  }
  return freq;
}