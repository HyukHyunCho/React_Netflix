import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import {
  userLogin,
  userSignup,
  imageUpload,
  userUpdate,
  getUserInfo,
} from "../services/axios";

export const useLogin = () => {
  return useMutation(userInfo => userLogin(userInfo));
};
  
export const useAddUser = () => {
  return useMutation(userInfo => userSignup(userInfo));
};

export const useImageUpload = () => {
  return useMutation(formImg => imageUpload(formImg));
};

export const useUpdateUser = () => {
  return useMutation(userInfo => userUpdate(userInfo));
};

export const useUserInfo = (accountName) => {
  return useQuery(["userInfo"], () => getUserInfo(accountName));
};