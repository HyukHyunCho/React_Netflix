import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useForm, Controller } from "react-hook-form";
import { useAddUser } from "../hooks/useAuth";
import Message from "../components/Message/Message";
import Spinner from "../components/Spinner/Spinner";
import Empty from "../components/Empty/Empty";

export default function Signup() {
  const navigate = useNavigate();
  const { handleSubmit, control, watch } = useForm();
  const { isLoading, isError, error, mutate } = useAddUser();
  const [message, setMessage] = useState("");

  const onSubmit = formData => {
    console.log({ user: formData });
    mutate(
      { user: formData },
      {
        onSuccess: data => {
          if (data.user) {
            navigate("/browse");
          } 
        },
        onError: err => {
          setMessage(err.response.data.message);
        }
      }
    );
  };

  return (
    <Layout>
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
                  <label style={{ color: "#e87c03" }}>{!!error}</label>
                  <label style={{ color: "#e87c03" }}>
                    {error ? error.message : null}
                  </label>
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
                  <label style={{ color: "#e87c03" }}>{!!error}</label>
                  <label style={{ color: "#e87c03" }}>
                    {error ? error.message : null}
                  </label>
                </Form>
              )}
              rules={{
                required: "비밀번호를 입력 해주세요.",
                minLength: {
                  value: 6,
                  message: "6글자 이상 입력해주세요.",
                },
                deps: ["passwordConfirm"],
              }}
            />
            <Controller
              name="passwordConfirm"
              control={control}
              defaultValue=""
              render={({ field: { onChange }, fieldState: { error } }) => (
                <Form>
                  <Input
                    type="password"
                    onChange={onChange}
                    placeholder="비밀번호 확인"
                  />
                  <label style={{ color: "#e87c03" }}>{!!error}</label>
                  <label style={{ color: "#e87c03" }}>
                    {error ? error.message : null}
                  </label>
                </Form>
              )}
              rules={{
                required: "비밀번호 확인을 입력 해주세요.",
                minLength: {
                  value: 6,
                  message: "6글자 이상 입력해주세요.",
                },
                validate: value =>
                  value === watch("password") ||
                  "비밀번호가 서로 일치하지 않습니다.",
              }}
            />
            <Controller
              name="username"
              control={control}
              defaultValue=""
              render={({ field: { onChange }, fieldState: { error } }) => (
                <Form>
                  <Input onChange={onChange} placeholder="사용자 이름" />
                  <label style={{ color: "#e87c03" }}>{!!error}</label>
                  <label style={{ color: "#e87c03" }}>
                    {error ? error.message : null}
                  </label>
                </Form>
              )}
              rules={{ required: "사용자 이름을 입력 해주세요." }}
            />
            <Controller
              name="accountname"
              control={control}
              defaultValue=""
              render={({ field: { onChange }, fieldState: { error } }) => (
                <Form>
                  <Input
                    onChange={onChange}
                    placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능"
                  />
                  <label style={{ color: "#e87c03" }}>{!!error}</label>
                  <label style={{ color: "#e87c03" }}>
                    {error ? error.message : null}
                  </label>
                </Form>
              )}
              rules={{
                required: "계정 입력",
                pattern: /^[-._a-z0-9]+$/gi,
              }}
            />

            <Controller
              name="intro"
              control={control}
              defaultValue=""
              render={({ field: { onChange }, fieldState: { error } }) => (
                <Form>
                  <Input
                    onChange={onChange}
                    placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능"
                  />
                  <label style={{ color: "#e87c03" }}>{!!error}</label>
                  <label style={{ color: "#e87c03" }}>
                    {error ? error.message : null}
                  </label>
                </Form>
              )}
              // rules={{
              //   required: "계정 입력",
              //   pattern: /^[-._a-z0-9]+$/gi,
              // }}
            />
            <Controller
              name="image"
              control={control}
              defaultValue=""
              render={({ field: { onChange }, fieldState: { error } }) => (
                <Form>
                  <Input
                    onChange={onChange}
                    placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능"
                  />
                  <label style={{ color: "#e87c03" }}>{!!error}</label>
                  <label style={{ color: "#e87c03" }}>
                    {error ? error.message : null}
                  </label>
                </Form>
              )}
              // rules={{
              //   required: "계정 입력",
              //   pattern: /^[-._a-z0-9]+$/gi,
              // }}
            />

            <Form>
              <Button type="submit">회원가입</Button>
            </Form>
          </form>
          {/* <Text onClick={() => navigate("/signup")}>회원가입</Text> */}
        </LoginForm>
      </LoginContainer>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.4) 50%,
      rgba(0, 0, 0, 0.5) 100%
    ),
    url(https://assets.nflxext.com/ffe/siteui/vlv3/e451379a-dd0a-4657-b530-4ca4c0cb2aee/8838592e-ac18-4348-a567-51cec66082e6/KR-ko-20230123-popsignuptwoweeks-perspective_alpha_website_large.jpg);
`;
const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 450px;
  opacity: 0.8;
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
  margin-bottom: 30px;
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
const ErrorMessage = styled.strong`
  display: inline-block;
  color: #e87c03;
  font-weight: 500;
  font-size: 12px;
  line-height: 1;
  margin-top: 6px;
`;
// const Text = styled.p`
//   color: #fff;
//   text-align: center;
// `;
