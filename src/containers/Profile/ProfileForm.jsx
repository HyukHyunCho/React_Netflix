import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Profile from "../../components/ProfileForm/Profile";

export default function ProfileForm() {
  const navigate = useNavigate();
  const {
    state: { profile },
  } = useLocation();
 
  const profileClick = () => {
    navigate("/profile/manage", { state: profile });
    //setModalOpen(true);
  };

  return (
    <>
      <Profile profile={profile} profileClick={profileClick}></Profile>

      {/* {modalOpen && (
        <ProfileModal profile={profile} setModalOpen={setModalOpen} />
      )} */}
    </>
  );
}
