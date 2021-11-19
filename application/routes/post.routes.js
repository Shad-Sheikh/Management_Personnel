const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const authenticate = require("../middleware/authenticate");
const { signup } = require("../controllers/registerController");
const { login } = require("../controllers/loginController");
router.post(
    "/signup", [
        body("email", "Invalid email address").notEmpty().escape().trim().isEmail(),
        body("password", "The Password must be of minimum 4 characters length")
        .notEmpty()
        .trim()
        .isLength({ min: 4 }),
        body("cpassword", "The Password must be of minimum 4 characters length")
        .notEmpty()
        .trim()
        .isLength({ min: 4 }),
    ],
    signup
);

router.post(
    "/login", [
        body("email", "Invalid email address").notEmpty().escape().trim().isEmail(),
        body("password", "The Password must be of minimum 4 characters length")
        .notEmpty()
        .trim()
        .isLength({ min: 4 }),
    ],
    login
);






module.exports = router;