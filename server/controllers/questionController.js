var db = require('../models')

var getAllQuestions = (req, res) => {
  db.Questions.findAll({
    include: [db.Users, db.Answers, db.Questionvotes]
  })
  .then( result => {
    res.send(result)
  })
  .catch( err => {
    res.send(err)
  })
}

var getQuestionById = (req, res) => {
  db.Questions.findById(req.params.id,
  {
    include: [db.Users, db.Answers]
  })
  .then( result => {
    res.send(result)
  })
  .catch( err => {
    res.send(err)
  })
}

var addQuestion = (req, res) => {
  db.Questions.create({
    title: req.body.title,
    content: req.body.content,
    UserId: req.body.UserId
  })
  .then( result => {
    res.send(result)
  })
  .catch( err => {
    res.send(err)
  })
}

var deleteQuestion = (req, res) => {
  db.Questions.destroy({
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

var editQuestion = (req, res) => {
  db.Questions.update({
    title: req.body.title,
    content: req.body.content
  },{
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
  getAllQuestions,
  getQuestionById,
  addQuestion,
  deleteQuestion,
  editQuestion
}
