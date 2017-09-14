var db = require('../models')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
var salt = bcrypt.genSaltSync(10)
require('dotenv').config()


var getAllUsers = (req, res) => {
  db.Users.findAll({
    include: [db.Questions]
  })
  .then( result => {
    res.send(result)
  })
  .catch( err => {
    res.send(err)
  })
}

var getUserById = (req, res) => {
  db.Users.findById(req.params.id, 
  {
    include: [db.Questions]
  })
  .then( result => {
    res.send(result)
  })
  .catch( err => {
    res.send(err)
  })
}

var removeUserById = (req, res) => {
  db.Users.destroy({
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

var signup = (req, res) => {
  let hashPwd = bcrypt.hashSync(req.body.password, salt)
  db.Users.create({
    fullname: req.body.fullname,
    username: req.body.username,
    password: hashPwd,
    email: req.body.email,
    photo: req.body.photo,
    role: 'user'
  })
  .then( result => {
    res.send(result)
  })
  .catch( err => {
    res.send(err)
  })
}

var signin = (req, res) => {
  db.Users.findOne({
    where: {
      email: req.body.email
    }
  })
  .then( result => {
    if( result !== null) {
      if(bcrypt.compareSync(req.body.password, result.password)){
        let token = jwt.sign({
          username: result.username,
          role: result.role,
          id: result.id
        },
        process.env.SECRET_KEY)
        res.send({
          token: token,
          username: result.username,
          id: result.id
        })
      } else {
        res.send('password salah')
      }
    } else {
      res.send(`username salah`)
    }
  })
  .catch( err => {
    res.send(err)
  })
}

module.exports = {
  getAllUsers,
  getUserById,
  removeUserById,
  signup,
  signin
}
