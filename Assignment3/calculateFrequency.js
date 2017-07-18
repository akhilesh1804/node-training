exports.calculateFrequency = (string) => {
	"use strict";
  const frequency = {};
  var character;
  const noSpaceString = string.replace(/\s/g,'');
  for (let index = 0; index < noSpaceString.length; index++) {
    character = noSpaceString[index];
    if (/[a-z]/.test(character))
      frequency[character] ? frequency[character]++ : frequency[character] = 1;
  }
  return frequency;
}
