function secureRoute(req, res, next) {
  if(req.session.userId) {
    next();
  } else {
    console.log('user was authorised');
    res.redirect('/login');
  }
}

module.exports = secureRoute;
