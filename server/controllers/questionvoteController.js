var db = require('../models')


var getVotes = (req, res) => {
  db.Questionvotes.findAll({
    include: [db.Users, db.Questions]
  })
  .then( result => {
    res.send(result)
  })
  .catch( err => {
    res.status(500).send(err)
  })
}

var createVote = (req, res) => {
  db.Questionvotes.create(
    {
      upvotes: req.body.upvotes,
      downvotes: req.body.downvotes,
      UserId: req.body.UserId,
      QuestionId: req.body.QuestionId
    })
    .then( result => {
      res.send(result)
    })
    .catch( err => {
      res.status(500).send(err)
    })
}

module.exports ={
  createVote,
  getVotes
}
