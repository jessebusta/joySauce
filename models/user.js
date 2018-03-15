module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userName: {
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
    },
  });

  // user can belong to many meetups as admin or member(roster) and have many Intrests
  User.associate = function(models) {
    User.belongsToMany(models.Roster, {
      foreignKey: {
        allowNull: false
      }
    });
  };

    User.associate = function(models) {
      User.belongsToMany(models.Meetups, {
        foreignKey: {
          allowNull: false
        }
      });
    };

    User.associate = function(models) {
      User.belongsToMany(models.Interests, {
        foreignKey: {
          allowNull: false
        }
      });
    };

  return User;
//create return function for the export, and separate tables into separate files
};
