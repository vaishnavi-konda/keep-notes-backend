const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const homeRoute = require('./routes/home');
const notesRoute = require('./routes/notes');
const app = express();
const cors = require('cors');
dotenv.config();

// Middlewares
app.use(express.json());
app.use(cors());

// Database connection
mongoose.connect(process.env.MONGO_URL, () => {
  console.log('Connected to MongoDB Atlas successfully.');
});

app.use('https://rocky-ridge-07774.herokuapp.com/api/', homeRoute);
app.use('https://rocky-ridge-07774.herokuapp.com/api/notes', notesRoute);

app.listen(process.env.PORT||4000, (req, res) => {
  console.log('Listening on port 4000');
});
