module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len: [4,20]
      }
    },
    //test email error to build notification to the user that the email is invalid
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len: [8,100]
      }
    }
  });

  // user can belong to many meetups as admin or member(roster) and have many Intrests
  // need to research belongsToMany, not using correctly.
  User.associate = function(models) {
    User.hasMany(models.Interests, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  // should probably be belongsToMany but cant figure out how to use correctly
  User.associate = function(models) {
    User.hasMany(models.Roster, {
      foreignKey: {
        allowNull: false
      }
    });
  };

    User.associate = function(models) {
      User.hasMany(models.Meetups, {
        foreignKey: {
          allowNull: false
        }
      });
    };



  return User;
//create return function for the export, and separate tables into separate files
};
