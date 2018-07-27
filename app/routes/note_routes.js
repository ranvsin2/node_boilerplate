module.exports = function(app, dbo) {
    app.post('/notes', (req, res) => {
      const note = { name: req.body.name, email: req.body.email,school:req.body.school};
      database.collection('notes').insertOne(note, (err, result) => {
        if (err) { 
          res.send({ 'error': 'An error has occurred' }); 
        } else {
          res.send(result.ops[0]);
        }
      });
    });
  };