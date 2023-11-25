const winController = {};

winController.updateScore = (req, res, next) => {
    try {
        const { winCount } = req.body;
        let currentScore = winCount;
        res.locals.currentScore = currentScore;
        return next();
    }
    catch(err) {
        return next({
            log: `Error in winController.updateScore:', ${err}`,
            message: {err: 'Error occured in winController.updateScore.'}
        });
    };
}

winController.getHighScore = (req, res, next) => {
    try {
        const { winCount } = req.body;
        let { highScore } = req.body;
        if (winCount > highScore) {
            highScore++;
        }
        res.locals.highScore = highScore;
        return next();
    }
    catch(err) {
        return next({
            log: `Error in winController.getHighScore:', ${err}`,
            message: {err: 'Error occured in winController.getHighScore.'}
        });
    };
};

module.exports = winController;