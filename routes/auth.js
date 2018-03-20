//import the auth controller and define the signup route
var authController = require('../controllers/authcontroller.js');

module.exports = function(app, passport) {

    app.get('/signup', authController.signup);
    app.get('/signin', authController.signin);
    app.get('/dashboard',isLoggedIn, authController.dashboard);
    app.get('/logout',authController.logout);
    app.get('/createmeet',isLoggedIn, authController.createmeet);
    app.post('/signup', passport.authenticate('local-signup', {
            successRedirect: '/dashboard',

            failureRedirect: '/signin'
        }

      ));
      app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',

        failureRedirect: '/signin'
    }

));
      function isLoggedIn(req, res, next) {

          if (req.isAuthenticated()) {
            req.session.isLoggedIn = true;
            return next();
          }

          res.redirect('/signin');

      }
}
