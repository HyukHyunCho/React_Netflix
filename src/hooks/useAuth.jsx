import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { userLogin, userSignup } from "../services/axios";

export const useLogin = () => {
  return useMutation(userInfo => userLogin(userInfo));
}
  
export const useAddUser = () => {
  return useMutation(userInfo => userSignup(userInfo));
}
  