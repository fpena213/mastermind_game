const express = require('express');
const getNumberController = require('../controllers/getNumberController');

const router = express.Router();

// ADD STARTER DATA REQUEST ROUTE HANDLER HERE
router.get('/', getNumberController.getCorrectNumber, (req, res) => {
  return res.status(200).send(res.locals.correctNumber);
});


module.exports = router;