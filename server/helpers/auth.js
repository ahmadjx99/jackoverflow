var jwt = require('jsonwebtoken')
var db = require('../models')
require('dotenv').config()

var adminOnly = (req, res, next) => {
  let tokenJWT = jwt.verify(req.headers.token, process.env.SECRET_KEY)
  if(tokenJWT.role == 'admin'){
    next()
  }else {
    res.status(500).send('Restricted page, please login as admin')
  }
} 

var adminAuthUser = (req, res, next) => {
  let tokenJWT = jwt.verify(req.headers.token, process.env.SECRET_KEY)
  if(tokenJWT.role == 'admin' || tokenJWT.role == 'user'){
    if(tokenJWT.role == 'user' && tokenJWT.id != req.params.id){
      res.send(`you're not authorized to access this page`)
    }else {
      next()
    }
  }else{
    res.send('restricted page, pls login as admin or user')
  }
}

module.exports = {
  adminOnly,
  adminAuthUser
}
