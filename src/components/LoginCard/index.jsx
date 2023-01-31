import React from 'react'
import Message from "../Message";
import {
  Layout,
  Logo,
  LoginContainer,
  LoginForm,
  Title,
} from "./styles";

export default function Login({ title, message, children }) {
  return (
    <Layout>
      <Logo
        alt="netflix logo"
        src={"https://cdn-icons-png.flaticon.com/512/5977/5977590.png"}
      />
      <LoginContainer>
        <LoginForm>
          <Title>{title}</Title>
          {message && <Message>{message}</Message>}
          {children}
        </LoginForm>
      </LoginContainer>
    </Layout>
  );
}
