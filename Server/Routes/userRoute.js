const express = require("express");
const {createUser, userLogin, afterLogin, jwtFunc} = require("../Controller/user")

const user = express.Router();

user.post("/create",createUser);
user.post("/login",userLogin);
user.get("/afterLogin",jwtFunc,afterLogin);


module.exports = user; 