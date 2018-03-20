module.exports = function (sequelize, DataTypes){
  var Meetups = sequelize.define("Meetups", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 100]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 800]
      }
    },
  });

  Meetups.associate = function(models) {
    Meetups.belongsToMany(models.User, {as: "joinedMeetups", through: "myMeetups", foreignKey: "joinedMeetupsID"});
  }

  Meetups.associate = function(models) {
    Meetups.hasMany(models.interests, {as: "meetupInterests", foreignKey: "meetupInterestsId"})
  }



  return Meetups;
};
