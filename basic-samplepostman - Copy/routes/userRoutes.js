const express = require("express");
const router = express.Router();
const {getUsers, userRegister} = require("../controllers/userController");

router.route("/users").get(getUsers);
router.route("/register").post(userRegister);



module.exports = router
