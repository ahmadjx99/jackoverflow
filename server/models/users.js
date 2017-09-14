'use strict';
module.exports = function(sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    fullname: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    role: DataTypes.STRING,
    photo: DataTypes.STRING
  });
  
  Users.associate = (models) => {
    Users.hasMany(models.Answers)
    Users.hasMany(models.Questions)
    Users.hasMany(models.Questionvotes)
    Users.hasMany(models.Answervotes)
  }
  
  return Users;
};
