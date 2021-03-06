//assigns express module to a variable express
var express = require('express');
//initialize express and name it a variable: app
var app = express();
//next 2 imports the passport module and express-session, both of which are needed to handle authentication.
var passport = require('passport');
var session = require('express-session');
//import body parser module which extracts entire body part of an incoming request and exposes it in a format that's easier to work with. In our case we use JSON format.
var bodyParser = require('body-parser');
//handles environment variables
var env = require('dotenv').load();
var exphbs = require('express-handlebars')
var handlebars = require('express-handlebars');
var path = require('path');


//For app using BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "layouts" }));
app.set('view engine', 'handlebars');

// For Passport and express session initialization and passport session and added both as middleware.
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

//Models
var models = require("./models");

//Sync Database
models.sequelize.sync().then(function() {

    console.log('Nice! Database looks fine')

}).catch(function(err) {

    console.log(err, "Something went wrong with the Database Update!")

});

//responds with welcome to passport when a GET request is made to /
app.get('/', function(req, res) {

    res.send('Welcome to Passport with Sequelize');

});


app.get('/signup', function(req, res){
  res.render('signup',);
});

app.get('/createmeet', function(req, res){
  console.log('hi');
  res.render('createmeet', {user: req.session.isLoggedIn});
});

// app.get('/testhtml', function(req, res){
//   res.render('testhtml');
// });

//For Handlebars
// app.set('views', './views')
// app.engine('hbs', exphbs({
//     extname: '.hbs'
// }));
// app.set('view engine', '.hbs');

//Routes
var authRoute = require('./routes/auth.js')(app, passport);

//load passport strategies
// console.log('this is a user');
// console.log(models.User);
require('./config/passport/passport.js')(passport, models.User);
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);


app.listen(3000, function(err) {

    if (!err)
        console.log("Site is live at port 3000");
    else console.log(err)

});
