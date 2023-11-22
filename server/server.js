const express = require('express');
const path = require('path');
const PORT = 3333;

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use('/', express.static(path.resolve(__dirname, '../public/index.html')));

/**
 * require routers
*/
const api = require('./routes/api.js');

/**
 * handle requests for static files
*/
app.use(express.static('public'));

/**
 * define route handlers
*/
app.use('/api', api);

//local error handler
app.use('*', (req,res) => {
    res.status(404).send('Page not found');
  });

//** Global error handler **//
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign(defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });


/**
 * start server
 */
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
  
module.exports = app;