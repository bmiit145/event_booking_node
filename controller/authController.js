// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { find } = require('../models/Event');

module.exports = {
    // login
    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            // set user as static 
            const users = {
                id: 1,
                first_name: "Satnam",
                last_name: "Decor",
                email: "admin@satnam.com",
                // password: bcrypt.hashSync("123456", 10)
                password: "123456"
            }

            const user = find(users, { email });

            if (!user) {
                return res.status(400).json({ message: 'User not found' });
            }

            // const isMatch = await bcrypt.compare(password, user.password);
            const isMatch = password === user.password;

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
