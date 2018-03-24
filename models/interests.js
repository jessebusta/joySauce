module.exports =  function (sequelize, DataTypes)  {
  var Interests = sequelize.define("Interests", {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    Interests_name: {
      type: DataTypes.TEXT,
      required: true
    },
    username: {
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

  return Interests;
};
