exports.calculateFrequency = function (string) {
  const frequency = {};
  var character;
  const noSpaceString = string.replace(/\s/g,'');
  for (var index = 0; index < noSpaceString.length; index++) {
    character = noSpaceString[index];
    if (/[a-z]/.test(character))
      frequency[character] ? frequency[character]++ : frequency[character] = 1 ;
  }
  return frequency;
}
