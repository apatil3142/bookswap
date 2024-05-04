import { ISignInPayload, ISignUpPayload } from "../interface";
import api from "./api";

export const signin = async (payload: ISignInPayload) => {
  const res = await api.apiInstance.post('/auth/signin', {...payload});
  return res;
};

export const signup = async (payload: ISignUpPayload) => {
  const res = await api.apiInstance.post('/auth/signup', {...payload});
  return res;
};

export const AuthService = {
  signin,
  signup
}