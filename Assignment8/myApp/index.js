const express = require('express');
const bodyparser = require('body-parser');
const employeesRoute = require('./routes/employeeRoutes');
const projectsRoute = require('./routes/projectRoutes');

const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded( { extended : true}));
app.use('/employees', employeesRoute());
app.use('/projects', projectsRoute());

app.listen(8080);
