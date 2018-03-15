module.exports = function (sequelize, DataTypes){
  var Meetups = sequelize.define("meetups", {
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

  // Meetups can only have one admin, many members(roster), many intrests
  Meetups.associate = function(models) {
    Meetups.hasOne(models.User, {
      onDelete: "cascade"
    });
  };

  Meetups.associate = function(models) {
    Meetups.hasOne(models.Roster, {
        onDelete: "cascade"
    });
  };

  Meetups.associate = function(models) {
    Meetups.belongsToMany(models.Interests, {
        foreignKey: {
          allowNull: false
        }
    });
  };

  return Meetups;
};
