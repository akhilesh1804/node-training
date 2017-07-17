exports.deleteClient = (app, request, url, auth) => {
  app.delete('/clients/:clientID', (req, res) => {
    request.delete(
      {
        url : `${url}/${req.params.clientID}.json`,
        headers : { "Authorization": auth }  
      }, 
      (err, response, body) => {
        if (err) throw err;
        res.send(response + body);
      } 
    );
  
  });
}
