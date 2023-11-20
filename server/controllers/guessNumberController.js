const guessNumberController = {};

guessNumberController.addGuess = (req, res, next) => {
    const { guess } = req.body;
    console.log('New Guess', guess);
    

};

module.exports = guessNumberController;