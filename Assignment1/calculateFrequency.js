// AKHILESH GOUTAM
// Calculate Frequency of letters in a string

function calculateFrequency(string) {
  var freq = {}; var i,ch;
  string = string.replace(/\s/g,'');
  for(i=0;i<string.length;i++) {
    ch=string.charAt(i);
    if(/[a-z]/.test(ch) )
      {
        if(freq[ch])
          freq[ch]++;
        else
          freq[ch]=1;
      }
  }
  return freq;
}
