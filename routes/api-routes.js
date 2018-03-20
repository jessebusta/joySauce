var db = require("../models");

module.exports = function(app) {
  app.get("/api/user/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      },
    }).then(function(dbUser){
      res.json(dbUser);
    });
  });


app.get("/api/createdMeetups/:UserId", function(req, res) {
  db.Meetups.findAll({
    where: {
        createdMeetups: req.params.createdMeetupsID
    }
  }).then(function(createdMeetups){
    res.json(createdMeetups);
  });
});

app.post("/api/createdMeetups", function(req, res) {
  console.log(req.body);
  db.createdMeetups.create(req.body).then(function(createdMeetups){
    res.json(createdMeetups);
  });
});

// need to figure out what to refrence
// app.get("/api/joinedMeetups/", function(req, res){
//   db.Members.findAll({
//     where: {
//         : db.Members.
//     }
//   })
// })

app.get("/api/meetupInterests/:meetupInterestsId", function(req, res){
  db.Meetups.findAll({
   where: {
      meetupInterestsId: req.params.meetupInterestsId
    }
  }).then(function(meetupInterest){
    res.json(meetupInterests);
  });
})

app.destroy("/")

};

// User info; user name(done), existing meetups(done), meetups that they joined, user active and inactive interests, posts that associate with interests.
