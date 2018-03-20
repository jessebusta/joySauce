module.exports =  function (sequelize, DataTypes)  {
  var Interests = sequelize.define("interests", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

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
