const express=require('express');
const mongoClient=require('mongodb').MongoClient;
const bodyparser=require('body-parser');

const app=express();
const db=require('./config/db');
console.log(db);
const port=8000;
app.use(bodyparser.urlencoded({ extended: true }));
require('./app/routes')(app,{});
// mongoClient.connect(db.url, function(err, db) {
//     if (err) throw err;
//     var dbo = db.db("mydb");
//   dbo.createCollection("notes", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
//   });
mongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err) 
    database = database.db("mydb")        
    // Make sure you add the database name and not the collection name
    require('./app/routes')(app,db);
    const note = { name: "ranvijay", email: "ranvijay@edureka.co",school:"kv"};
    database.collection('notes').insertOne(note, (err, result) => {
      console.log(result);
    })
    app.listen(port, () => {
      console.log('We are live on ' + port);
    });               
  })
