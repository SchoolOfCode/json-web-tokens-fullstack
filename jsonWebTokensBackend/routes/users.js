const express = require("express");
const jwt = require(`jsonwebtoken`);

const { authenticateUser } = require(`../models/users.js`);
const { authenticate } = require("../middleware/authenticate.js");

const router = express.Router();

const { JWT_SECRET_PLAYER1, JWT_SECRET_PLAYER2 } = require("../config");

/* GET users listing. */
router.get("/", authenticate, function(req, res, next) {
  res.json({ success: true, payload: user });
});

router.get("/secrets", authenticate, function(request, response, next) {
  const { user } = request.user;
  if (user === "player1") {
    response.json({ success: true, payload: "player 1 secrets" });
  }
  if (user === "player2") {
    response.json({ success: true, payload: "player 2 secrets" });
  }
  response.json({ success: false, payload: "no secrets" });
});

router.post(`/login`, (request, response) => {
  const { username, password } = request.body;
  const user = authenticateUser(username, password);
  if (user === "player1") {
    console.log("hello player1");
    const token = jwt.sign({ user }, JWT_SECRET_PLAYER1, { expiresIn: "1h" });
    return response.json({ success: true, token });
  }
  if (user === "player2") {
    console.log("hello player2");
    const token = jwt.sign({ user }, JWT_SECRET_PLAYER2, { expiresIn: "1h" });
    return response.json({ success: true, token });
  } else return response.json({ success: false });
});

module.exports = router;
