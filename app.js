const express = require('express')
const app = express();
const port = 4001
const cors = require('cors');

// Allow requests from any origin
// Enable CORS for all routes
app.use(cors());



app.use(express.json());

// view engine
// const hbs = require('hbs')
// const bodyParser = require('body-parser')

app.use(express.urlencoded({ extended: true }));
// app.set('view engine', 'hbs');
// app.set('views',  __dirname + '/views')


// mongoes connect

const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://21bmiit145:root@satnam-decor.kya4kd2.mongodb.net/satnam_decor?retryWrites=true&w=majority" ,{
    family : 4,
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
       console.log("connected to db");
}).catch((err) => {
    console.log(err);
})


const routes = require("./router");
const { redirect } = require('express/lib/response');
app.use("/" , routes);
app.get('/', (req, res) => {
    // res.redirect('/contact')
    res.send('Hello World!')
})

app.listen(port, () => console.log(`contact  app listening on port ${port}!`));