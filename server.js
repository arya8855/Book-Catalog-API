const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/users', require("./Routes/userRoutes"));
app.use('/api/books', require("./Routes/bookRoutes"));

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})
