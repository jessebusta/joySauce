var db = require("../models");

module.exports = function(app) {
  app.get("/api/user/:username", function(req, res) {
    db.User.findOne({
      where: {
        username: req.params.username
      },
    }).then(function(dbUser){
      res.json(dbUser);
    });
  });


  app.get("/api/createdMeetups/:UserId", function(req, res) {
    db.Meetups.findAll({
      where: {
          createdMeetups: req.params.UserId
      },
      include: [db.User]
    }).then(function(createdMeetups){
      res.json(createdMeetups);
    });
  });

  app.get("/api/MeetupsByInterests/:id", function(req, res){
    db.Meetups.findAll({
      where: {
        id: id
      },
      include: [db.Interests]
    }).then(function(meetupsByInterests){
      res.json(meetupsByInterests);
    })
  });

  app.get("/api/allInterests", function(req, res){
    db.Interests.findAll().then(function(allInterests){
      res.json(allInterests)
    });
  });

  app.post("/api/createdMeetups", function(req, res) {
    db.Meetups.create(req.body).then(function(dbMeetup){
      res.json(dbMeetup);
    })
  });

  app.post("/api/newInterest", function(req, res){
    db.Interests.create(req.body).then(function(newInterest){
      res.json(newInterest);
    });
  });

};



// need to figure out what to refrence
// app.get("/api/joinedMeetups/", function(req, res){
//   db.Members.findAll({
//     where: {
//         : db.Members.
//     }
//   })
// })


// User info; user name(done), existing meetups(done), meetups that they joined, user active and inactive interests, posts that associate with interests.
