module.exports =  function (sequelize, DataTypes)  {
  var Interests = sequelize.define("interests", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false
    },
    interests_name: {
      type: DataTypes.TEXT,
      required: true
    },
    user_username: {
      type: DataTypes.STRING,
      required: true
    },
    user_email: {
      type: DataTypes.STRING,
      required: true
    },
  });

  Interests.associate = function(models) {
    Interests.hasMany(models.Meetups)
  };

// Users and Meetups can have many Intrests
// Interests.associate = function(models) {
//   Interests.belongsToMany(models.User, {through: "userInterests"});
// };
//
// Interests.associate = function(models) {
//   Interests.belongsToMany(models.Meetups, {through: "meetupInterests"});
// };

  return Interests;
};
