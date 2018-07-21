module.exports = function(app, db) {
    const collection = 
    app.post('/notes', (req, res) => {
      const note = { name: req.body.name, email: req.body.email,school:req.body.school};
      db.collection('notes').insert(note, (err, result) => {
        if (err) { 
          res.send({ 'error': 'An error has occurred' }); 
        } else {
          res.send(result.ops[0]);
        }
      });
    });
  };