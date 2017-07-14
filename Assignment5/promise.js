const fs = require('fs');
const read = (file, coding) => {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(file, coding, (err, data) => {
      (err) ? reject(err) : resolve(data);
    });
  return promise;
};

const append = (file, data, coding) => {
  const promise = new Promise((resolve, reject) => {
    fs.appendFile(file, data, coding, err => {
      (err) ? reject(err) : resolve();
    });
  });
  return promise;
};

const write = (file, data, coding) => {
  const promise = new Promise((resolve, reject) => {
    fs.writeFile(file, data, coding, err => {
      (err) ? reject(err) : resolve();
    });
  });
  return promise;
};

read('File1.txt', 'utf8')
 .then((result, reject) => {
    console.log("==========");
    console.log(result);
    append('File2.txt', result, 'utf8');
  })
 .then((result, reject) => read('File2.txt', 'utf8'))
 .then((result, reject) => {
    console.log("==========");
    console.log(result);
    write('File3.txt', result, 'utf8');
  })
 .then((result, reject) => read('File3.txt', 'utf8'))
 .then((result, reject) => {
    console.log("==========");
    console.log(result);
    console.log("==========");
  })
 .catch(err => console.log(err));
