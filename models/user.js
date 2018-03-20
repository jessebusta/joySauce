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

    User.associate = function(models) {
      User.hasMany(models.Meetups, {as: "createdMeetups", foreignKey: "createdMeetupsId"})
    }


  return User;
//create return function for the export, and separate tables into separate files
};
