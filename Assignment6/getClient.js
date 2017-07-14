exports.getClient = (app, request, url, auth) => {
  app.get('/clients/:clientID', (req, res) => {
    console.log("running app.get");
    request.get(
      {
        url : url + "/" + req.params.clientID + ".json",
        headers : {
          "Authorization": auth
        }  
      }, 
      (err, response, body) => {
        if (err) {
          console.log(err);
        }
        res.send(body);
      } 
    );
  
  });
}
