const express = require("express");
router = express.Router();

userRoute = require('../controllers/userController');


router.get("/", userRoute.userController);


module.exports = router;