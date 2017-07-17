// AKHILESH GOUTAM
// Calculate Frequency of letters in a string
"use strict";
function calculateFrequency(string) {
  const frequency = {}; 
  const noSpaceString = string.replace(/\s/g,'');
  for (let index = 0; index < noSpaceString.length; index++) {
    let character = noSpaceString[index];
    if(/[a-z]/.test(character) )
      {
        frequency[character] ? frequency[character]++ : frequency[character] = 1;
      }
  }
  return frequency;
}
