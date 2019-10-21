import React, { useState } from "react";

function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form action="">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
      </form>
    </div>
  );
}
