const express = require('express');
const getNumberController = require('../controllers/getNumberController');
const guessNumberController = require('../controllers/guessNumberController');

const router = express.Router();

router.get('/', getNumberController.getRandomNumber, (req, res) => {
    return res.status(200).send(res.locals.solution);
});

router.post('/', getNumberController.compareNumbers, (req, res) => {
    return res.status(200).json({ numCorrect: res.locals.numCorrect, locCorrect: res.locals.locCorrect });
});

module.exports = router;