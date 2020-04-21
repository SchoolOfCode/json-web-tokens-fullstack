import React, { useState } from "react";

function Login({ sendLogin }) {
  const [state, setState] = useState({ password: "", username: "" });

  function handleChange(event) {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    sendLogin(state);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label for="username">Username:</label>
      <input
        type="text"
        name="username"
        value={state.username}
        onChange={handleChange}
      ></input>
      <label for="password">Password:</label>
      <input
        type="password"
        name="password"
        value={state.password}
        onChange={handleChange}
      ></input>
      <input type="submit" value="Login"></input>
    </form>
  );
}

export default Login;
