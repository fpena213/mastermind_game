const guessNumberController = {};

guessNumberController.addGuess = (req, res, next) => {
    try {
        const { guess } = req.body;
        res.locals.newGuess = guess;
        return next();
    }
    catch(err) {
        return next({
            log: `Error in guessNumberController.addGuess:', ${err}`,
            message: {err: 'Error occured in guessNumberController.addGuess'}
        });
    };
};

module.exports = guessNumberController;