var db = require('../models')

var getVotes = (req, res) => {
  db.Answervotes.findAll({
    include: [db.Answers, db.Users]
  })
  .then( result => {
    res.send(result)
  })
  .catch( err => {
    res.status(500).send(err)
  })
}

var createVote = (req, res) => {
  db.Answervotes.create(
    {
      upvotes: req.body.upvotes,
      downvotes: req.body.downvotes,
      UserId: req.body.UserId,
      AnswerId: req.body.AnswerId
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
