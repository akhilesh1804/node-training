const request = require('request');
const express = require('express');
const bodyParser = require('body-parser');
const getClient = require('./getClient');
const createClient = require('./createClient');
const deleteClients = require('./deleteClient');
const getLists = require('./getLists');
const getClients = require('./getClients');
const app = express();
const url = 'https://api.createsend.com/api/v3.1/clients';
const auth = "Basic " + new Buffer('fc96dc9ded698bbfbfb975409a864a42' + ":").toString("base64");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     
  extended: true
}));

getClient.getClient(app, request, url, auth);
getLists.getLists(app, request, url, auth);
deleteClients.deleteClient(app, request, url, auth);
createClient.createClient(app, request, url, auth);
getClients.getClients(app, request, url, auth);

app.listen(3030);
