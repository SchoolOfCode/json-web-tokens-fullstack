const jwt = require("jsonwebtoken");

const { JWT_SECRET_PLAYER1, JWT_SECRET_PLAYER2 } = require("../config");

function authenticate(request, response, next) {
  try {
    console.log(request.headers, "1");
    // if (user === "player1") {
    //   const { authorization } = request.headers;
    //   const token = authorization.split(" ")[1];
    //   const decodedPlayer1 = jwt.verify(token, JWT_SECRET_PLAYER1);
    //   request.user = decodedPlayer1;
    //   next();
    // }
    const { authorization } = request.headers;
    const token = authorization.split(" ")[1];
    const decodedPlayer2 = jwt.verify(token, JWT_SECRET_PLAYER2);
    request.user = decodedPlayer2;
    next();
  } catch (error) {
    console.log(error);
    response.sendStatus(403);
  }
}

module.exports = { authenticate };
