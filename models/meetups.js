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

  // Meetups can only have one admin, many members(roster), many intrests
  Meetups.associate = function(models) {
    Meetups.hasOne(models.User, {
      onDelete: "cascade"
    });
  };

  Meetups.associate = function(models) {
    Meetups.hasMany(models.interests, { as: "names"});
        // foreignKey: {
        //   allowNull: false
        // }
    // });
  };

  Meetups.associate = function(models) {
    Meetups.hasOne(models.Roster, {
        onDelete: "cascade"
    });
  };



  return Meetups;
};
