const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// Load Env Variables
dotenv.config({ path: './config/config.env' });

const app = express();

// Body Parser
app.use(express.json());

// Enable cors
app.use(cors());

app.get('/', (req, res) => res.send('Hello'))

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running in ${process.env.NODE_ENV} on port ${PORT}`))