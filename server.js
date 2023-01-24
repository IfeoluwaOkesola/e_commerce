const express = require('express');
const { dbConnection } = require('./config/connections');

const port = process.env.PORT;
require('dotenv').config();
const app = express();

app.use(express.json());

//const routeManager = require('./routes/rts')
//const { Product } = require('./models/products')
//dotenv.config()

//app.use('/',  routeManager)

dbConnection();

app.listen(port, () => {
  console.log(`Example app listening on port ${port} `);
});

//frontend

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/product', (req, res) => {
  res.render('product');
});

app.get('/sign-in', (req, res) => {
  res.render('sign-in');
});

app.get('/tables', (req, res) => {
  res.render('tables');
});
