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
    { name: 'Express portfolio site', description: 'This website, built with Node.js, Express and EJS, using Bootstrap and Font Awesome, and deployed on Render.', link: 'https://github.com/marioonuoha-mj47/Assignment-2-mario' },
    { name: 'HTML/CSS Project portfolio site', description: 'My first portfolio site, built as four separate pages with HTML5 and CSS3. It has a responsive fluid layout with media queries, gradients, a validated contact form, an embedded intro video, and is hosted on GitHub Pages.', link: 'https://github.com/marioonuoha-mj47/Assignment1-Portfolio' }
  ];
  res.render('projects', { title: 'Projects', projects: projects });
});

// Contact page: GET "/contact" renders views/contact.ejs
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact Me' });
});

// Export the router so app.js can use it with app.use('/', indexRouter)
module.exports = router;