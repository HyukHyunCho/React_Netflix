import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import ProfileManage from "../../components/ProfileForm/ProfileManage";
import {
  ProfileImg,
  Form,
  Input,
  Button,
  LabelMessage,
} from "../../components/ProfileForm/styles";
import { useImageUpload, useUpdateUser } from "../../hooks/useAuth";

export default function ProfileManageForm() {
  const navigate = useNavigate();
  const { handleSubmit, control, watch } = useForm();
  const { mutate: uploadImage } = useImageUpload();
  const { mutate: updateUser } = useUpdateUser();
  const { state } = useLocation();
  const [message, setMessage] = useState("");

  const onSubmit = (formData, e) => {

    const formImg = new FormData();
    formImg.append("image", e.target.profile.files[0]);

    uploadImage(formImg, {
      onSuccess: filename => {
        formData.image = filename;

        updateUser(
          { user: formData },
          {
            onSuccess: data => {
              if (data.user) {
                alert("수정완료");
                navigate("/browse");
              }
            },
            onError: err => {
              setMessage(err.response.data.message);
            }
          }
        );
      },
      onErrpr: err => {
        setMessage(err.response.data.message);
      },
    });
  };

  return (
    <ProfileManage>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Form>
          <Controller
            name="username"
            control={control}
            defaultValue={state.username}
            render={({ field: { onChange }, fieldState: { error } }) => (
              <Form>
                <Input
                  defaultValue={state.username}
                  placeholder="사용자 이름"
                  onChange={onChange}
                />
                <LabelMessage>{!!error}</LabelMessage>
                <LabelMessage>{error ? error.message : null}</LabelMessage>
              </Form>
            )}
            rules={{ required: "사용자 이름을 입력 해주세요." }}
          />
        </Form>
        <Form>
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
        </Form>
        <Form>
          <Button>수정</Button>
        </Form>
      </form>
    </ProfileManage>
  );
}
