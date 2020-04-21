const express = require("express");

// A function which authenticates a login request. The login authentication is hard coded.

const user1 = { name: "player1", password: "password" };
const user2 = { name: "player2", password: "password" };

function authenticateUser(username, password) {
  if (username === user1.name && password === user1.password) {
    return username;
  }
  if (username === user2.name && password === user2.password) {
    return username;
  } else return false;
}

module.exports = {
  authenticateUser
};
