const blogController = require('../controllers/blogController');
const authController = require('../controllers/authController');
const router = require('express').Router();
const secureRoute = require('../lib/secureRoute');
const ratingController = require('../controllers/ratingController');

//homepage
router.get('/', function(req,res) {
  res.render('home');
});

//load the about page
router.get('/about', function(req,res) {
  res.render('about');
});

router.get('/blog', blogController.indexRoute);

// router.get('/blog/indexRoute2', blogController.indexRoute2);

router.get('/blog/new', secureRoute, blogController.newRoute);

//listen for post requests to /blog
router.post('/blog', secureRoute, blogController.createRoute);

//show route
router.get('/blog/:id', blogController.showRoute);

//update route
router.get('/blog/:id/edit', blogController.editRoute);

//delete route
router.delete('/blog/:id', secureRoute, blogController.deleteRoute);

// Rating CREATE route
router.post('/blog/:blogId/ratings', secureRoute, ratingController.createRoute);

// Rating DELETE route
router.delete('/blog/:blogId/ratings/:ratingId', secureRoute, ratingController.deleteRoute);


router.get('/register', authController.registerFormRoute);
router.post('/register', authController.registerRoute);

router.get('/login', authController.loginFormRoute);
router.post('/login', authController.loginRoute);

router.get('/logout', authController.logoutRoute);

module.exports = router;
