module.exports = function(sequelize, DataTypes) {

    var User = sequelize.define('User', {

        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },

        username: {
            type: DataTypes.TEXT
        },

        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
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
