const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const { json } = require('express/lib/response');
const MongoClient = require('mongodb').MongoClient;
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

//Connect to DB
MongoClient.connect('mongodb+srv://rjdev-test:J9ukuNGfWZWlEsRt@cluster0.b7crfg0.mongodb.net/?retryWrites=true&w=majority', { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database');
    const db = client.db('FruityDoro');
    const userDataCollection = db.collection('UserData');


    //ROUTES
    app.get('/', (req, res) => {

      res.sendFile(path.join(__dirname, 'index.html'));

    })

    app.get('/layouttest', (req, res) => {
      res.sendFile(path.join(__dirname, '/public/layouttest.html'));
    })

    app.get('/newindex', (req, res) => {

      res.sendFile(path.join(__dirname, '/public/newindex.html'));
    })



    app.post('/tasks', (req, res) => {
      userDataCollection.insertOne(
        { detail: req.body.detail }
      )
        .then(result => {
          res.json('Success');
        })
        .catch(error => console.error(error))
    })

    app.get('/tasks', (req, res) => {

      userDataCollection.find().toArray()
        .then(result => {
          res.json(result);
        })
        .catch(error => console.error(error))
    })

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
  })

