import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useAddUser, useImageUpload } from "../../hooks/useAuth";
import {
  Form,
  Input,
  LabelMessage,
  Button,
  Text,
} from "../../components/LoginCard/styles";
import LoginCard from "../../components/LoginCard";
import axios from "axios";

export default function SignupForm() {
  const navigate = useNavigate();
  const { handleSubmit, control, watch } = useForm();
  const { mutate: addUser } = useAddUser();
  const { mutate: uploadImage } = useImageUpload();

  const [message, setMessage] = useState("");

  const onSubmit = async (formData, e) => {
   
    const formImg = new FormData();
    formImg.append("image", e.target.profile.files[0]);
 
    // const { data: { filename } } = await axios.post(`/image/uploadfile`, formImg);
   
    //formData.image = filename;

    uploadImage(formImg, {
      onSuccess: filename => {
        console.log(filename);

        formData.image = filename;

        addUser(
          { user: formData },
          {
            onSuccess: data => {
              if (data.user) {
                navigate("/browse");
              }
            },
            onError: err => {
              setMessage(err.response.data.message);
            },
          }
        );
      },
      onErrpr: err => {
        console.log(err);
      },
    });

    
  };

  return (
    <LoginCard
      title={"회원가입"}
      btnName={"로그인 이동"}
      message={message}
      onSubmit={onSubmit}
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
              <LabelMessage>{!!error}</LabelMessage>
              <LabelMessage>{error ? error.message : null}</LabelMessage>
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
              <LabelMessage>{!!error}</LabelMessage>
              <LabelMessage>{error ? error.message : null}</LabelMessage>
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
              <Input onChange={onChange} placeholder="닉네임" />
              <LabelMessage>{!!error}</LabelMessage>
              <LabelMessage>{error ? error.message : null}</LabelMessage>
            </Form>
          )}
          rules={{
            required: "닉네임을 입력 해주세요.",
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
                placeholder="전화번호를 입력 해주세요."
              />
              <LabelMessage>{!!error}</LabelMessage>
              <LabelMessage>{error ? error.message : null}</LabelMessage>
            </Form>
          )}
        />
        <Controller
          name="image"
          control={control}
          defaultValue=""
          render={({ field: { onChange }, fieldState: { error } }) => (
            <Form>
              <Input
                type="file"
                id="profile"
                accept="image/jpg,image/png,image/jpeg,image/gif"
                onChange={onChange}
              />
              <LabelMessage>{!!error}</LabelMessage>
              <LabelMessage>{error ? error.message : null}</LabelMessage>
            </Form>
          )}
        />
        <Form>
          <Button type="submit">회원가입</Button>
          <Text onClick={() => navigate("/")}>로그인 이동</Text>
        </Form>
      </form>
    </LoginCard>
  );
}
