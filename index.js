const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./db');
const port = 4000;



app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true,}))

/*
  app.get('/product', db.getUsers)
  app.get('/product/:id', db.getUserById)
*/
  app.get('/orders', db.getUsers)
  app.get('/db/:pname', db.getUserById)

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`))


