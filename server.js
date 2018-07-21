const express=require('express');
const mongoClient=require('mongodb').MongoClient;
const bodyparser=require('body-parser');

const app=express();
const db=require('./config/db');
const port=8000;
app.use(bodyparser.urlencoded({ extended: true }));
require('./app/routes')(app,{});
mongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err) 
    database = database.db("ranvijay-edureka")
    database.collection('notes')         
    // Make sure you add the database name and not the collection name
    require('./app/routes')(app,database);
    app.listen(port, () => {
      console.log('We are live on ' + port);
    });               
  })
