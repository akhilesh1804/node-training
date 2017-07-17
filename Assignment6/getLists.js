exports.getLists = (app, request, url, auth) => {
  app.get('/clients/:clientID/lists', (req, res) => {
    request.get(
      {
        url : `${url}/${req.params.clientID}/lists.json`,
        headers : { "Authorization": auth }  
      }, 
      (err, response, body) => {
        if (err) throw err;
        res.send(body);
      } 
    );
  
  });
}
