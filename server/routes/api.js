const express = require('express');
const getNumberController = require('../controllers/getNumberController');
const guessNumberController = require('../controllers/guessNumberController');

const router = express.Router();

router.get('/', getNumberController.getCorrectNumber, (req, res) => {
  return res.status(200).send(res.locals.correctNumber);
});

router.post('/', guessNumberController.addGuess, (req, res) => {
    return res.status(200).send(res.locals.newGuess);
});

module.exports = router;