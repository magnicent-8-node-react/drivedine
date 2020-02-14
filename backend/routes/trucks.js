// Native Imports
const express = require('express');
const router = express.Router();

// Controllers
const { getTrucks, addTruck } = require('../controllers/trucks')

// Endpoints
router.route('/')
    .get(getTrucks)
    .post(addTruck);

module.exports = router;