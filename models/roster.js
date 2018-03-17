module.exports = function(sequelize, DataTypes) {
  var Roster = sequelize.define("Roster", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });


  Roster.associate = function(models) {
    Roster.hasMany(models.User, {
      onDelete: "cascade"
    })
  };

  Roster.associate = function(models) {
    Roster.belongsTo(models.Meetups, {
      allowNull: false
    })
  }



 return Roster;
};
