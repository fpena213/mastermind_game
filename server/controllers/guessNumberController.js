const guessNumberController = {};

// app.use((req, res, next) => {
//     req.locals = {};
//     req.locals.data = 'This is some data';
//     next();
// });

// app.get('/example', (req, res) => {
//     console.log(req.locals.data);
//     res.send('Data saved to req.locals');
// });

guessNumberController.addGuess = (req, res, next) => {
    try {
        const { guess, solution } = req.body;
        res.locals.newGuess = guess;
        res.locals.solution = solution;
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