// loading .env first of all
require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Database Connection - now only used mongoDB
connectDB();

app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/admin', require('./routes/admin'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
