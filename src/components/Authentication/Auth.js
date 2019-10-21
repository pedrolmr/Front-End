import React, { useState } from "react";
import Register from "../Register/Register";
import Login from "../Login/Login";

function Auth() {
  const [Token, setToken] = useState("");

  return (
    <div>
      <Login />
      <Register />
    </div>
  );
}

export default Auth;
