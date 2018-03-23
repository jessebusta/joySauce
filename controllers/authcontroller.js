var exports = module.exports = {}

exports.signup = function(req, res) {

    res.render('signup');

}

exports.signin = function(req, res) {

    res.render('signin');

}

exports.createmeet = function(req, res) {

    res.render('createmeet');

}

exports.dashboard = function(req, res) {

    res.render('dashboard', {user: req.session.isLoggedIn});

}


exports.logout = function(req, res) {

    req.session.destroy(function(err) {

        res.redirect('/signin');

    });

}
