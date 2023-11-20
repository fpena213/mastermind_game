const express = require('express');
const getNumberController = require('../controllers/getNumberController');
const guessNumberController = require('../controllers/guessNumberController');

const router = express.Router();

router.get('/', getNumberController.getRandomNumber, (req, res) => {
  return res.status(200).send(res.locals.solution);
});

router.post('/', guessNumberController.addGuess, getNumberController.compareNumbers, (req, res) => {
    return res.status(200).send(res.locals.newGuess);
});

module.exports = router;