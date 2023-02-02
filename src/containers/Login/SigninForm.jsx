import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useLogin } from "../../hooks/useAuth";
import Spinner from "../../components/Spinner";
import Empty from "../../components/Empty";
import {
  Form,
  Input,
  LabelMessage,
  Button,
  Text,
} from "../../components/LoginCard/styles";
import LoginCard from "../../components/LoginCard";

export default function SigninContainer() {
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
            localStorage.setItem("account", data.user.accountname);
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
    <LoginCard
      title={"로그인"}
      btnName={"회원가입 이동"}
      message={message}
    >
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
          <Text onClick={() => navigate("/signUp")}>회원가입 이동</Text>
        </Form>
      </form>
    </LoginCard>
  );
}