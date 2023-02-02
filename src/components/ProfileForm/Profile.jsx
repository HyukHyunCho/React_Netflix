import React from "react";
import {
  Layout,
  ProfileContainer,
  ProfileForm,
  ProfileImg,
  Title,
  Text,
} from "./styles";

export default function Profile({ profile, profileClick }) {
  return (
    <Layout>
      <ProfileContainer>
        <ProfileForm onClick={profileClick}>
          <Title>프로필 관리</Title>
          <ProfileImg
            alt="user"
            src={`https://mandarin.api.weniv.co.kr/${profile.image}`}
          />
          <Text>{profile.username}</Text>
        </ProfileForm>
      </ProfileContainer>
    </Layout>
  );
}



