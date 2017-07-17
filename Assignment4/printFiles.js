const fs = require('fs');
fs.readFile('File1.txt', 'utf8', (err, data) => {
  console.log("============");
  console.log(data);
  fs.appendFile('File2.txt', data, 'utf8', (err) => {
    fs.readFile('File2.txt', 'utf8',  (err, content) {
      console.log("============");
      console.log(content);
      fs.writeFile('File3.txt', content, 'utf8', (err) => {
        fs.readFile('File3.txt', 'utf8',  (err, data) {
          console.log("============");
          console.log(data);
          console.log("============");
        });
      });
    });  
  });
});
