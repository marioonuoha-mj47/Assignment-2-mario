// Import Express and create a router object to hold our page routes
var express = require('express');
var router = express.Router();

// Home page: GET "/" renders views/index.ejs and passes it a title
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home' });
});

// About page: GET "/about" renders views/about.ejs
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About Me' });
});

// Projects page: the array is passed to the view, which loops over it
router.get('/projects', function (req, res, next) {
  const projects = [
    { name: 'PROJECT 1', description: 'DESCRIPTION', link: '#' },
    { name: 'PROJECT 2', description: 'DESCRIPTION', link: '#' }
  ];
  res.render('projects', { title: 'Projects', projects: projects });
});

// Contact page: GET "/contact" renders views/contact.ejs
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

// Export the router so app.js can use it
module.exports = router;