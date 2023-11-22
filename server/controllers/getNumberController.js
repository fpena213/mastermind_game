const getNumberController = {};

getNumberController.getRandomNumber = (req, res, next) => {
    const min = 0;
    const max = 7;
    //allowing for duplicate numbers
    const randomNumUrl = `https://www.random.org/integers/?num=4&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`;

    fetch(randomNumUrl)
    .then(response => response.text())
    .then(resultString => {
      const randomInteger = resultString.trim().replace(/\s/g, '');
      res.locals.solution = randomInteger;
      return next();
    })
    .catch(err => {
        return next({
            log: `Error in getNumberController.getRandomNumber :', ${err}`,
            message: {err: 'Error occured in getNumberController.getRandomNumber'}
        });
    });
};

getNumberController.compareNumbers = (req, res, next) => {
    try {
        let numCorrect = 0;
        let locCorrect = 0;
        const { guess, solution } = req.body;

        for (let key in guess) {
            const guessDigit = guess[key];

            // Check if the digit is present at the same index in the solution
            if (solution[key] === guess[key]) {
                numCorrect++;
                locCorrect++;
                delete solution[key];
            } else if (Object.values(solution).includes(guessDigit)) {
                numCorrect++;
            }
        }
        res.locals = { numCorrect: numCorrect, locCorrect: locCorrect };
        return next();
    }
    catch(err) {
        return next({
            log: `Error in getNumberController.compareNumbers:', ${err}`,
            message: {err: 'Error occured in getNumberController.compareNumbers'}
        });
    };
}


module.exports = getNumberController;