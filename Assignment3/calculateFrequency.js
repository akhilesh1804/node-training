exports.calculateFrequency = function (string) {
  const frequency = {};
  var character;
  string = string.replace(/\s/g,'');
  for (var index = 0; index < string.length; index++) {
    character = string[index];
    if (/[a-z]/.test(character))
      frequency[character] ? frequency[character]++ : frequency[character] = 1 ;
  }
  return frequency;
}
