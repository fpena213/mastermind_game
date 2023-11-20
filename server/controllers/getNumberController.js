const getNumberController = {};

getNumberController.getCorrectNumber = (req, res, next) => {
    // // const numParams =  {
    // //     method: "GET", 
    // //     body: {
    // //         num: 4,
    // //         min: 0,
    // //         max: 7,
    // //         col: 1,
    // //         base: 10,
    // //         format: "plain"
    // //     }
    // // };
    // fetch("https://www.random.org/integers/?num=4&min=0&max=7&col=1&base=10&format=plain&rnd=new")
    //   .then(response => response.body)
    //   .then(data => {
    //     const reader = data.getReader();
    //     console.log(data)
    //     res.locals.correctNumber = data;
    //     console.log('You have a new correct number');
    //     return next();
    //   })
    //   .catch(err => {
    //     return next({
    //       log: `Error in getNumberController.getNumber :', ${err}`,
    //       message: {err: 'Error occured in getNumberController.getNumber'}
    //     });
      // The API endpoint for generating a single random integer
    const min = 0;
    const max = 7;
    const apiUrl = `https://www.random.org/integers/?num=4&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`;

    fetch(apiUrl)
    .then(response => response.text())
    .then(resultString => {
      const randomInteger = resultString.trim().replace(/\s/g, '');
      res.locals.correctNumber = randomInteger;
      return next();
    })
    .catch(err => {
        return next({
            log: `Error in getNumberController.getNumber :', ${err}`,
            message: {err: 'Error occured in getNumberController.getNumber'}
        });
    });
};
      
module.exports = getNumberController;