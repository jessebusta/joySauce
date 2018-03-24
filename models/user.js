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
      User.hasMany(models.Meetups)
    }

  return User;
  
};
