const express = require("express");
const mongoose = require("mongoose"); 
const cors = require('cors');
const connectDB = require("./config/db");
require('dotenv').config();

connectDB();

const app = express();
app.use(express.json());
app.use(cors());

app.get('/ping', (req, res) => {
    res.status(200).json({ message: 'Server is running!' });
});

app.use('/cards', require('./routes/cardRoutes'));

const PORT = process.env.port || 4000;



app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
