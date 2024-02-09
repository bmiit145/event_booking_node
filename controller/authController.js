const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports = {
    // login
    login: async (req, res) => {
        try {
            const { email, password } = req.body;

            // set user as static 
            const user = {
                id: 1,
                name: "John Doe",
                email: "21bmiit145@gmail.com",
                password: bcrypt.hashSync("123456", 10)
            }

            if (!user) {
                return res.status(400).json({ message: 'User not found' });
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }

            const payload = {
                user: {
                    id: user.id
                }
            };

            jwt.sign(
                payload,
                process.env.JWT_SECRET,
                { expiresIn: 3600 },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );
        } catch (error) {
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }
};
