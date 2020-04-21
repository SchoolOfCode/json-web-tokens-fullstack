import React, { useState } from "react";
import "./App.css";

import customFetch from "../../libs/customFetch";

import Login from "../Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  async function sendLogin(data) {
    const { success } = await customFetch("http://localhost:5000/users/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    if (success) {
      setIsLoggedIn(true);
    }
  }

  return (
    <div className="App">
      {!isLoggedIn ? (
        <Login sendLogin={sendLogin} />
      ) : (
        <h1>You are logged in!</h1>
      )}
    </div>
  );
}

export default App;
