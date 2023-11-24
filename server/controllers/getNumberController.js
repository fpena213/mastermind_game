const getNumberController = {};

getNumberController.getRandomNumber = (req, res, next) => {
    // change difficulty level from frontend input
    const difficulty = req.query.difficulty;
    const min = 0;
    let max = 7;
    if (difficulty === 'Easy') {
        max = 4;
    } else if (difficulty === 'Hard') {
        max = 9;
    }
    const randomNumUrl = `https://www.random.org/integers/?num=4&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`;

    // fetches random number from random generator api
    fetch(randomNumUrl)
    .then(response => response.text())
    .then(resultString => {
      const randomInteger = resultString.trim().replace(/\s/g, '');
      // sends back solution on response object
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
    // compares guess to solution with every new guess
    try {
        let numCorrect = 0;
        let locCorrect = 0;
        const { guess, solution } = req.body;

        //compares each digit in guess number object to each digit in solution number object
        for (let key in guess) {
            const guessDigit = guess[key];
            if (solution[key] === guess[key]) {
                numCorrect++;
                locCorrect++;
                delete solution[key];
            } else if (Object.values(solution).includes(guessDigit)) {
                numCorrect++;
            }
        }

        // sends back data of number and location correct on response object
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