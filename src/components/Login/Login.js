import React from "react";
import Form from "./Form";
import Styled from "styled-components";

function Login() {
  return (
    <LoginPage>
      <h1>Login Page</h1>
      <Form />

      <h4>
        Don't have an account? <a href="/register">Register Here</a>
      </h4>
    </LoginPage>
  );
}

const LoginPage = Styled.div`
    text-align: center
`;

export default Login;
