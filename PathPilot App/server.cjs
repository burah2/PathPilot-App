const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/create-profile', (req, res) => {
    const { username, email, password } = req.body;

    // In a real application, you would store this data in a database
    console.log('User Profile Created:', { username, email, password });

    res.status(200).json({ message: 'User profile created successfully' });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
