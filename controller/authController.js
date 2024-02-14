const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { find } = require('../models/Event');
const app = require('express');
const user = require('../models/User');

module.exports = {
    // login
    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            // set user as static 
            // const users = [{
            //     id: 1,
            //     first_name: "Satnam",
            //     last_name: "Decor",
            //     email: "admin@satnam.com",
            //     password: bcrypt.hashSync("123456", 12)
            // },
            // {
            //     id: 2,
            //     first_name: "Satnam",
            //     last_name: "Decor",
            //     email: "kuldeep@satnam.com",
            //     password: bcrypt.hashSync("123456", 12)
            
            // },
            // {
            //     id: 3,
            //     first_name: "Satnam",
            //     last_name: "Decor",
            //     email: "ankush@satnam.com",
            //     password: bcrypt.hashSync("123456", 12)
            
            // },
            // {
            //     id: 4,
            //     first_name: "Satnam",
            //     last_name: "Decor",
            //     email: "ajay@satnam.com",
            //     password: bcrypt.hashSync("123456", 12)
            
            // }];

            user = user.findAll();
            const users = user.findAll();
            const user = users.find(user => user.email === email)

            if (!user) {
                return res.status(400).json({ message: 'User not found' });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            // const isMatch = password === user.password;

            if (!isMatch) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }

            const payload = {
                user: {
                    id: user.id,
                    first_name: user.first_name,
                    email: user.email
                }
            };

            const jwtSecret = "jwtSecret";

            jwt.sign(
                payload,
                jwtSecret,
                { expiresIn: 3600 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token , user , message: 'Logged in successfully' , status: 200 , success: true});
                }
            );
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }
};
