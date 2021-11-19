const express = require("express");
const router = express.Router();
const {getUser} = require('../controllers/getUserController');


router.get("/", (req, res) => {
 res.render("index.hbs");
  });
  router.get("/login", (req, res) => {
    res.render("login.hbs");
  });
  router.get("/signup", (req, res) => {
    res.render("signup.hbs");
  });
  router.get("/user/forgot", (req, res) => {
    res.render("forgot.hbs");
  });
  router.get("/user/reset", (req, res) => {
    res.render("setnewpassword.hbs");
  });



//===================== middleware ========================
router.get('/getuser',getUser);

  module.exports =router;