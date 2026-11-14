// Import Express and create a router to hold our page routes
var express = require('express');
var router = express.Router();

// Home page: GET "/" renders views/index.ejs
// The object { title: 'Home' } is passed to the view as a variable
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home' });
});

// About page: GET "/about" renders views/about.ejs
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About Me' });
});

// Projects page: the projects array is sent to the view,
// which loops over it to build one card per project
router.get('/projects', function (req, res, next) {
  const projects = [
    { name: 'PROJECT 1 NAME', description: 'PROJECT 1 DESCRIPTION', link: '#' },
    { name: 'PROJECT 2 NAME', description: 'PROJECT 2 DESCRIPTION', link: '#' }
  ];
  res.render('projects', { title: 'Projects', projects: projects });
});

// Contact page: GET "/contact" renders views/contact.ejs
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

// Export the router so app.js can use it with app.use('/', indexRouter)
module.exports = router;