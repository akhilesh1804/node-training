exports.createClient = (app, request, url, auth) => {
  app.post('/clients', (req, res) => {
    request.post(
      {
        url : `${url}.json`,
        headers : { "Authorization": auth },
        body : JSON.stringify(req.body) 
      }, 
      (err, response, body) => {
        console.log("callback\n")
        if(err) throw err;
        res.send(body);
      }   
    );
  });
}
