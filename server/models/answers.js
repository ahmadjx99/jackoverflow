'use strict';
module.exports = function(sequelize, DataTypes) {
  var Answers = sequelize.define('Answers', {
    content: DataTypes.STRING,
    UserId: DataTypes.INTEGER,
    QuestionId: DataTypes.INTEGER
  });
  
  Answers.associate = (models) => {
    Answers.belongsTo(models.Questions)
    Answers.belongsTo(models.Users)
  }
  
  return Answers;
};
