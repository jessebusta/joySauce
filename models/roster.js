module.exports = function(sequelize, DataTypes) {
  var Roster = sequelize.define("Roster", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  Roster.associate = function(models) {
    Roster.belongsTo(models.Meetups, {
      foreignKey: {
        allowNull: false
      }
    });

    Roster.hasMany(models.User, {
        onDelete: "cascade"
      }
    });

};

return Roster;
}
