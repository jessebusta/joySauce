module.exports = function (sequelize, DataTypes){
  var Meetups = sequelize.define("Meetups", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    interestId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 800]
      }
    }
  });

  // Meetups.associate = function(models) {
  //   Meetups.belongsToMany(models.User, {as: "joinedMeetups", through: "myMeetups", foreignKey: "joinedMeetupsID"});
  // }
  //
  // Meetups.associate = function(models) {
  //   Meetups.hasMany(models.interests, {as: "meetupInterests", foreignKey: "meetupInterestsId"})
  // }

  Meetups.associate = function(models) {
    Meetups.belongsTo(models.Interests)
  };

  Meetups.associate = function(models) {
    Meetups.belongsTo(models.User)
  };

  return Meetups;
};
