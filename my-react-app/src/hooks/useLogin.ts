// src/hooks/useLogin.ts
import { useMutation } from 'react-query';
import { login, LoginCredentials } from '../api/auth';

export const useLogin = () => {
  return useMutation((credentials: LoginCredentials) => login(credentials));
};
