import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import { useLogin } from "../hooks/useAuth";
import Message from "../components/Message/Message";
import Spinner from "../components/Spinner/Spinner";
import Empty from "../components/Empty/Empty";

export default function Signin() {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm();
  const { isLoading, isError, error, mutate } = useLogin();
  const [message, setMessage] = useState("");
  
  const onSubmit = formData => {
    mutate(
      { user: formData },
      {
        onSuccess: data => {
          if (data.user) {
            localStorage.setItem("token_", data.user.token);
            navigate("/browse");
          } else {
            setMessage(data.message);
          }
        },
      }
    );
  };

  if (isLoading) return <Spinner />;
  if (isError) return <Empty>{error.message}</Empty>;

  return (
    <Layout>
      <Logo
        alt="netflix logo"
        src={"https://cdn-icons-png.flaticon.com/512/5977/5977590.png"}
        onClick={() => navigate("/")}
      />
      <LoginContainer>
        <LoginForm>
          <Title>로그인</Title>
          {message && <Message>{message}</Message>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              render={({ field: { onChange }, fieldState: { error } }) => (
                <Form>
                  <Input onChange={onChange} placeholder="이메일" />
                  <LabelMessage>{!!error}</LabelMessage>
                  <LabelMessage>{error ? error.message : null}</LabelMessage>
                </Form>
              )}
              rules={{
                required: "이메일을 입력 해주세요.",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "이메일 형식을 입력하세요.",
                },
              }}
            />
            <Controller
              name="password"
              control={control}
              defaultValue=""
              render={({ field: { onChange }, fieldState: { error } }) => (
                <Form>
                  <Input
                    type="password"
                    onChange={onChange}
                    placeholder="비밀번호"
                  />
                  <LabelMessage>{!!error}</LabelMessage>
                  <LabelMessage>{error ? error.message : null}</LabelMessage>
                </Form>
              )}
              rules={{
                required: "패스워드를 입력 해주세요.",
                deps: ["passwordConfirm"],
              }}
            />
            <Form>
              <Button>로그인</Button>
            </Form>
          </form>
          <Text onClick={() => navigate("/signup")}>회원가입</Text>
        </LoginForm>
      </LoginContainer>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.4) 50%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(https://assets.nflxext.com/ffe/siteui/vlv3/e451379a-dd0a-4657-b530-4ca4c0cb2aee/8838592e-ac18-4348-a567-51cec66082e6/KR-ko-20230123-popsignuptwoweeks-perspective_alpha_website_large.jpg);
`;
const Logo = styled.img`
  position: absolute;
  width: 120px;
  top: 0px;
  left: 30px;
  cursor: pointer;
`;
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 450px;
  background-color: #000;
`;
const LoginForm = styled.div`
  width: 300px;
`;
const Title = styled.h1`
  padding-top: 30px;
  color: white;
  font-size: 1.5em;
`;
const Form = styled.div`
  margin-bottom: 20px;
`;
const Input = styled.input`
  width: 100%;
  height: 50px;
  padding: 10px;
  font-size: 16px;
  color: #fff;
  border: none;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: #333;
`;
const Button = styled.button`
  width: 100%;
  height: 48px;
  color: #fff;
  font-size: 1em;
  border: none;
  border-radius: 5px;
  background-color: #e50914;
`;
const LabelMessage = styled.strong`
  display: inline-block;
  color: #e87c03;
  font-weight: 500;
  font-size: 12px;
  margin-top: 6px;
`;
const Text = styled.p`
  color: #fff;
  text-align: center;
`;
