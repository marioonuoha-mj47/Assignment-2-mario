// Libraries the generator installs: error handling, Express, file paths, cookies, logging
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Load the router file that holds our page routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Create the Express application
var app = express();

// Tell Express where the views are and that they are EJS templates
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware: request logging, body parsing, cookies
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Serve CSS, JS and images from the public folder (public is not in the URL)
app.use(express.static(path.join(__dirname, 'public')));

// Connect the routes: "/" goes to routes/index.js
app.use('/', indexRouter);
app.use('/users', usersRouter);

// If no route matched, create a 404 error and pass it on
app.use(function (req, res, next) {
  next(createError(404));
});

// Error handler: shows views/error.ejs
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

// Export the app so bin/www can start the server
module.exports = app;