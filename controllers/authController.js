const User = require('../models/user');

function registerFormRoute(req, res) {
  //send the user a registration form
  res.render('auth/register');
}

function registerRoute(req, res) {
  //create a new user
  //re.body contains the data from the registration form
  User.create(req.body)
    .then(result => {
      console.log('user created!', result);
      //redirect the user to the homepage
      res.redirect('/');
    });
}

//LOGIN route
function loginFormRoute(req, res) {
  res.render('auth/login');
}

//

function loginRoute(req, res) {
  // req.body has the data from the login form
  console.log('User is logging in', req.body);
  // Process the login.
  // Check for an existing user
  User.findOne({ email: req.body.email })
    .then(result => {
      // Hopefully, result contains a user
      if (!result) {
        // If there is no user
        res.redirect('/login');
      } else {
        // We've found a user in the database! Write the user's
        // ID into their locker (session).
        // (req.session is the locker)
        req.session.userId = result._id;
      }
    });
  // Validate the password
  // Write their id into req.session
  // Otherwise redirect to login form
}

module.exports = {
  registerFormRoute: registerFormRoute,
  registerRoute: registerRoute,
  loginFormRoute: loginFormRoute,
  loginRoute: loginRoute
};
