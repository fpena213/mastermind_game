const getNumberController = {};

getNumberController.getRandomNumber = (req, res, next) => {
    const min = 0;
    const max = 7;
    const apiUrl = `https://www.random.org/integers/?num=4&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`;

    fetch(apiUrl)
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
    console.log(req.body.guess, res.locals.solution)
}


module.exports = getNumberController;