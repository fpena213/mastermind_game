// imports the Express framework
const express = require('express');

// imports the controller functions for handling routes
const getNumberController = require('../controllers/getNumberController');
const guessNumberController = require('../controllers/guessNumberController');

// creates an instance of the Express Router
const router = express.Router();

// handles GET requests to the root endpoint '/'
router.get('/', getNumberController.getRandomNumber, (req, res) => {
    return res.status(200).send(res.locals.solution);
});

// handles POST requests to the root endpoint '/'
router.post('/', getNumberController.compareNumbers, (req, res) => {
    return res.status(200).json({ numCorrect: res.locals.numCorrect, locCorrect: res.locals.locCorrect });
});

module.exports = router;