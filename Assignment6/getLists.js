exports.getLists = (app, request, url, auth) => {
  app.get('/clients/:clientID/lists', (req, res) => {
    console.log("running app.get");
    request.get(
      {
        url : url + "/" + req.params.clientID + "/lists.json",
        headers : {
          "Authorization": auth
        }  
      }, 
      (err, response, body) => {
        if (err) {
          console.log(err);
        }
        console.log(response + body);
        res.send(body);
      } 
    );
  
  });
}
