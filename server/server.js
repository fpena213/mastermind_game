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

/**
 * start server
 */
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
  });
  
module.exports = app;