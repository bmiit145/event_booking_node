const express = require('express')
const app = express();
const port = 4001

// Allow requests from any origin
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// app.use(express.json());

// view engine
// const hbs = require('hbs')
// const bodyParser = require('body-parser')

app.use(express.urlencoded({ extended: true }));
// app.set('view engine', 'hbs');
// app.set('views',  __dirname + '/views')


// mongoes connect

// const mongoose = require('mongoose');
// mongoose.set('strictQuery', true);
// mongoose.connect("mongodb://localhost:27017/whatsapp_no" ,{ family : 4})
// .then(() => {
//     app.listen(port, () => console.log(`Whatsapp app listening on port ${port}!`));
// }).catch((err) => {
//     console.log(err);
// })


const routes = require("./router");
const { redirect } = require('express/lib/response');
app.use("/" , routes);
app.get('/', (req, res) => {
    // res.redirect('/contact')
    res.send('Hello World!')
})

app.listen(port, () => console.log(`contact  app listening on port ${port}!`));