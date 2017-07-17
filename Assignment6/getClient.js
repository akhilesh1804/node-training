exports.getClient = (app, request, url, auth) => {
  app.get('/clients/:clientID', (req, res) => {
    request.get(
      {
        url : `${url}/${req.params.clientID}.json`,
        headers : { "Authorization": auth }  
      }, 
      (err, response, body) => {
        if (err) throw err;
        res.send(body);
      } 
    );
  
  });
}
