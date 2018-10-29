const blogController = require('../controllers/blogController');
const authController = require('../controllers/authController');
const router = require('express').Router();

router.get('/register', authController.registerFormRoute);
router.post('/register', authController.registerRoute);

router.get('/login', authController.loginFormRoute);
router.post('/login', authController.loginRoute);

//homepage
router.get('/', function(req,res) {
  res.render('home');
});

//load the about page
router.get('/about', function(req,res) {
  res.render('about');
});

router.get('/blog', blogController.indexRoute);

router.get('/blog/indexRoute2', blogController.indexRoute2);

router.get('/blog/new', blogController.newRoute);

//listen for post requests to /blog
router.post('/blog', blogController.createRoute);

//show route
router.get('/blog/:id', blogController.showRoute);

//update route
router.get('/blog/:id/edit', blogController.editRoute);

//delete route
router.delete('/blog/:id', blogController.deleteRoute);

router.route('/register')
  .get(authController.registerFormRoute)
  .post(authController.registerRoute);

//LOGIN route
router.route('/login')
  .get(authController.loginFormRoute)
  .post(authController.loginRoute);

router.get('/logout', authController.logoutRoute);

module.exports = router;
