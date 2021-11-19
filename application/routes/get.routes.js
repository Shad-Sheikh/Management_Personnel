const express = require("express");
const router = express.Router();
const authenticate = require("../middleware/authenticate");


router.get("/", (req, res) => {
 res.render("index.hbs");
  });
  router.get("/:id/attendance", (req, res) => {
    res.render("attendance");
     });

     router.get("/:id/auth-forgot-password", (req, res) => {
      res.render("auth-forgot-password");
       });

       router.get("/login", (req, res) => {
        res.render("auth-login");
         });
         router.get("/signup", (req, res) => {
          res.render("auth-register");
           });

 
  router.get("/about", authenticate, (req, res) => {
    console.log("hello i am about");
    res.send(req.UserRoot);

});





  module.exports =router;