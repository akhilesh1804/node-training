"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const routers = require('./routes/routers');
const simple = require('./myMiddleware');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
//app.use(simple);
//app.use('/', routers());
app.use('/', simple, routers());

app.listen(8080);