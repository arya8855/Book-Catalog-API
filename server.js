const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const mongoose = require('mongoose');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Health check endpoints:-
app.get("/health", (req, res) => {
  res.json({
    message: 'Server is running!',
    database: mongoose.connection.readyState === 1 ? 'MongoDB connected' : 'Not connected',
  });
});

app.use('/api/users', require("./Routes/userRoutes"));
app.use('/api/books', require("./Routes/bookRoutes"));


app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})
