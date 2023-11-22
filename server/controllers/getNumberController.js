const getNumberController = {};

getNumberController.getRandomNumber = (req, res, next) => {
    const min = 0;
    const max = 7;
    const randomNumUrl = `https://www.random.org/integers/?num=4&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`;

    fetch(randomNumUrl)
    .then(response => response.text())
    .then(resultString => {
      const randomInteger = resultString.trim().replace(/\s/g, '');
      res.locals.solution = randomInteger;
      console.log(res.locals.solution)
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
    let numCorrect = 0;
    let locCorrect = 0;
    try {
        const { guess, solution } = req.body;
        console.log(guess, Object.values(solution))
        for (let num in guess) {
            if (solution[num] === guess[num]) {
                numCorrect++;
                locCorrect++;
            } else if (Object.values(solution).includes(guess[num])) {
                numCorrect++;
            }
        }
        // res.locals.newGuess = guess;
        // res.locals.solution = solution;
        //res.locals.numCorrect = numCorrect;
        // res.locals.locCorrect= locCorrect;
        console.log(numCorrect, locCorrect)
        numCorrect = 0;
        locCorrect = 0;
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