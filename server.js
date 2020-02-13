const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db')

// Load Env Variables
dotenv.config({ path: './config/config.env' });

// Connect to Database
connectDB();

const app = express();

// Body Parser
app.use(express.json());

// Enable cors
app.use(cors());

// Routes
app.use('/api', require('./routes/trucks'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`))