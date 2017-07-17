exports.getClients = (app, request, url, auth) => {
  app.get('/clients', (req, res) => {
    request.get(
      {
        url : `${url}.json`,
        headers : { "Authorization": auth }
      }, 
      (err, response, body) => { 
        if (err) throw err;
        res.send(body);
      } 
    );
  
  });
}
