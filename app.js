const express = require('express')
const app = express();
const port = 3000
const cors = require('cors');
const User = require('./models/User');
const bcrypt = require('bcrypt');

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
const mongooseConn = () => {
    mongoose.connect("mongodb+srv://21bmiit145:root@satnam-decor.kya4kd2.mongodb.net/satnam_decor?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
            console.log("connected to db");
            creationOfUser();
        }).catch((err) => {
            console.log("error  ::: " + err);
            //mongooseConn();
        })
}

const creationOfUser = async () => {
    // default users
    const userData = [{
        id: 1,
        first_name: "Satnam",
        last_name: "Decor",
        email: "admin@satnam.com",
        password: bcrypt.hashSync("123456", 12)
    },
    {
        id: 2,
        first_name: "Satnam",
        last_name: "Decor",
        email: "kuldeep@satnam.com",
        password: bcrypt.hashSync("123456", 12)

    },
    {
        id: 3,
        first_name: "Satnam",
        last_name: "Decor",
        email: "ankush@satnam.com",
        password: bcrypt.hashSync("123456", 12)

    },
    {
        id: 4,
        first_name: "Satnam",
        last_name: "Decor",
        email: "ajay@satnam.com",
        password: bcrypt.hashSync("123456", 12)

    }];

    const savePromises = userData.map(async (u) => {
        try {
            // Attempt to find the user by email
            const existingUser = await User.findOne({ $or: [{ id: u.id }, { email: u.email }] });

            if (!existingUser) {
                // User does not exist, save it
                await new User(u).save();
                console.log(`User with email ${u.email} added.`);
            } else {
                console.log(`User with email ${u.email} already exists, skipping.`);
            }
        } catch (error) {
            // Handle errors
            console.error(`Error processing user ${u.email}: ${error.message}`);
        }
    });

    Promise.all(savePromises)
        .then(() => {
            console.log('All users have been processed.');
        })
        .catch(error => {
            console.error('Error processing users:', error);
        });
}

const routes = require("./router");
const { redirect } = require('express/lib/response');
app.use("/", routes);
app.get('/', (req, res) => {
    // res.redirect('/contact')
    res.send('Hello World!')
})

mongooseConn();
app.listen(port, () => console.log(`app listening on port ${port}!`));
