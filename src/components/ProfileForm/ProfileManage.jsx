import React from "react";
import Message from "../Message/";
import {
  Layout,
  ProfileForm,
  Title,
} from "./styles";

export default function ProfileManage({ children, message }) {
  return (
    <Layout>
      <ProfileForm>
        <Title>프로필 수정</Title>
        {message && <Message>{message}</Message>}
        {children}
      </ProfileForm>
    </Layout>
  );
}

