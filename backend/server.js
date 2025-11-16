require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("Connected to MongoDB Atlas"))
    .catch(err => console.error("MongoDB connection error:", err));

app.get('/', (req, res) => {
    res.send('Backend is running.');
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
