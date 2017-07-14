exports.getClients = (app, request, url, auth) => {
  app.get('/clients', (req, res) => {
    console.log("running app.get hjhhhh",request);
    request.get(
      {
        url : url + ".json",
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
