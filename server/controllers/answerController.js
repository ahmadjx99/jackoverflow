var db = require('../models')

var getAllAnswers = (req, res) => {
  db.Answers.findAll(
    {
      include: [db.Users, db.Questions]
    }
  )
  .then( result => {
    res.send(result)
  })
  .catch( err => {
    res.status(500).send(err)
  })
}

var getAnswerById = (req, res) => {
  db.Answers.findById(req.params.id,
  {
    include: [db.Users, db.Questions]
  })
  .then( result => {
    res.send(result)
  })
  .catch( err => {
    res.status(500).send(err)
  })
}

var createAnswer = (req, res) => {
  db.Answers.create({
    content: req.body.content,
    UserId: req.body.UserId,
    QuestionId: req.body.QuestionId
  })
  .then( result => {
    res.send(result)
  })
  .catch( err => {
    res.send(err)
  })
}

var deleteAnswer = (req, res) => {
  db.Answers.destroy({
    where: {
      id: req.params.id
    }
  })
  .then( result => {
    res.send(result)
  })
  .catch( err => {
    res.status(500).send(err)
  })
}

module.exports = {
  getAllAnswers,
  getAnswerById,
  createAnswer,
  deleteAnswer
}
