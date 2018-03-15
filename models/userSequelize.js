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

  var Events = sequelize.define("Events", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        len: [1,100]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1,800]
      }
    },
    members: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  });

  var Interests = sequelize.define("Interests", {
    interest: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActive:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  });

//create return function for the export, and separate tables into separate files
}
