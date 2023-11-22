//TODO: I think I can delete this
// const guessNumberController = {};

// guessNumberController.addGuess = (req, res, next) => {
//     try {
//         const { guess, solution } = req.body;
//         res.locals.newGuess = guess;
//         res.locals.solution = solution;
//         return next();
//     }
//     catch(err) {
//         return next({
//             log: `Error in guessNumberController.addGuess:', ${err}`,
//             message: {err: 'Error occured in guessNumberController.addGuess'}
//         });
//     };
// };

// module.exports = guessNumberController;