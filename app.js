const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

// MIDDLEWARE 
app.use(bodyParser.json());
app.use(cors());

// Import routes
const postsRoute = require('./routes/posts');
const usersRoute = require('./routes/users');

// Routes
app.use('/posts', postsRoute);
app.use('/users', usersRoute);


app.get('/', (req, res) => {
    res.send('we are on home')
});


// Connect to DB
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser : true, useUnifiedTopology : true}, () => {
    console.log('connected to DB!')
});

// Start the server
app.listen(3000);