const express = require("express");
const {loginCtrl, registerCtrl} = require("../controllers/auth")
const router = express.Router();
const {validatorRegister, validatorLogin} = require("../validators/auth")

router.post("/register", validatorRegister, registerCtrl);
router.post("/login", validatorLogin, loginCtrl);



module.exports = router;