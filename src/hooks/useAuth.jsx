import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import {
  userLogin,
  userSignup,
  imageUpload,
  getUserImage,
} from "../services/axios";

export const useLogin = () => {
  return useMutation(userInfo => userLogin(userInfo));
}
  
export const useAddUser = () => {
  return useMutation(userInfo => userSignup(userInfo));
}

export const useImageUpload = () => {
  return useMutation(formImg => imageUpload(formImg));
}

export const useImage = (filepath) => {
  return useQuery(["image"], () => getUserImage(filepath));
}