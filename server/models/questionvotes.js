'use strict';
module.exports = function(sequelize, DataTypes) {
  var Questionvotes = sequelize.define('Questionvotes', {
    upvotes: DataTypes.BOOLEAN,
    downvotes: DataTypes.BOOLEAN,
    UserId: DataTypes.INTEGER,
    QuestionId: DataTypes.INTEGER
  });
  
  Questionvotes.associate = (models) => {
    Questionvotes.belongsTo(models.Users)
    Questionvotes.belongsTo(models.Questions)
  }
  
  
  return Questionvotes;
};
