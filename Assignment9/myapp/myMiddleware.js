"use strict";
// const routers = require('./routes/routers');
const TOKENS = require('./config');
const ERROR_STATUS = 401;
const ERROR_MESSAGE = { message1 : 'access denied', message2 : 'No authorization header'};

// module.exports = () => {
//   console.log("Middleware");
//   return (req, res, next) => {
//     console.log("Middleware functions");
//     let err;
//     const authHeader = req.headers.authorization;
//     if (!authHeader) {
//       err = { message : ERROR_MESSAGE.message2};
//       res.status(ERROR_STATUS).send(err);
//       res.end();
//     }
//     const token = authHeader.replace("Bearer ", "");
//     let index;
//     for (index = 0; index < TOKENS.length; index++) {
//       //err = { message : ERROR_MESSAGE.message1 };
//       if (token === TOKENS[index]) {
//         //err = null;
//         next();
//         //break;
//       }
//     }
//     //if (err)
//       res.status(ERROR_STATUS).send();
//       res.end();
//   }
// }


module.exports = (req, res, next) => {
  let err;
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    err = { message : ERROR_MESSAGE.message2};
    res.status(ERROR_STATUS).send(err);
    res.end();
  }
  else {
    const token = authHeader.replace("Bearer ", "");
    for (let index = 0; index < TOKENS.length; index++) {
      err = { message : ERROR_MESSAGE.message1 };
      if (token === TOKENS[index]) {
        console.log("\nTOKENS matched");
        err = null;
        next();
        break;
      }
    }
    if (err) {
      res.status(ERROR_STATUS).send(err);
      res.end();
    } 
  }      
}
