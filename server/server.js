const express = require('express');
// imports the 'path' module for working with file and directory paths
const path = require('path');
const PORT = 3333;

const app = express();

// configures middleware to parse JSON data in requests
app.use(express.json());
// configures middleware to parse URL-encoded data in requests
app.use(express.urlencoded());

app.use('/', express.static(path.resolve(__dirname, '../public/index.html')));

// requires routers defined in separate files
const api = require('./routes/api.js');

// handles requests for static files in 'public' directory
app.use(express.static('public'));

// define route handlers for the '/api' endpoint
app.use('/api', api);

// local error handler
app.use('*', (req,res) => {
    res.status(404).send('Page not found');
});

// global error handler for uncaught errors
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


// start server
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
  
module.exports = app;