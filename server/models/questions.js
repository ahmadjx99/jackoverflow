'use strict';
module.exports = function(sequelize, DataTypes) {
  var Questions = sequelize.define('Questions', {
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  });
  
  Questions.associate = (models) => {
    Questions.hasMany(models.Answers)
    Questions.belongsTo(models.Users)
    Questions.hasOne(models.Questionvotes)
  }
  
  return Questions;
};
