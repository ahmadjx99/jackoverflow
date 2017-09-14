'use strict';
module.exports = function(sequelize, DataTypes) {
  var Answervotes = sequelize.define('Answervotes', {
    upvotes: DataTypes.BOOLEAN,
    downvotes: DataTypes.BOOLEAN,
    UserId: DataTypes.INTEGER,
    AnswerId: DataTypes.INTEGER
  });
  
  Answervotes.associate = (models) => {
    Answervotes.belongsTo(models.Users)
    Answervotes.belongsTo(models.Answers)
  }

  return Answervotes;
};
