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
  Interests.associate = function(models) {
    Interests.hasMany(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  Interests.associate = function(models) {
    Interests.hasMany(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Interests;
};
