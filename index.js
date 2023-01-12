const express = require('express')
var bodyParser = require('body-parser')
const port = 5000
const dotenv = require('dotenv')
const app = express()

const cors = require('cors')
const routeManager = require('./routes/rts')
//const { Product } = require('./models/products')
dotenv.config()

app.use(cors())
app.use('/',  routeManager)

app.listen(port, () => {
    console.log(`Example app listening on port ${port} `)
})




//frontend

app.set('view engine', 'ejs')

app.use(express.static('public'));

app.get('/',(req,res)=>{
   res.render('index');
})

app.get('/product',(req,res)=>{
    res.render('product');
 })

 app.get('/sign-in',(req,res)=>{
    res.render('sign-in');
 })

 app.get('/tables',(req,res)=>{
    res.render('tables');
 })

