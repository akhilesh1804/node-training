exports.deleteClient = (app, request, url, auth) => {
  app.delete('/clients/:clientID', (req, res) => {
    console.log("running app.delete");
    request.delete(
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
        res.send(response + body);
      } 
    );
  
  });
}
