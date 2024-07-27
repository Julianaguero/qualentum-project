// import { useState } from "react";
import { UserDataProps } from "../types";
import { useAppDispatch, useAppSelector } from "./store";
import { userLogin, userLogout } from "../store/auth/authSlice";
import { type FormUserProps } from "../pages/LoginForm/LoginForm";

const useAuthActions = () => {
  const { userData, isLogged, authChecked } = useAppSelector(
    (state) => state.auth
  );

  const dispatch = useAppDispatch();

  const handleLogin = (data: FormUserProps) => {
    const userData: Omit<UserDataProps, "role"> = {
      username: data.userName,
      email: data.mail,
      password: data.password,
    };
    const userDataWithRole: UserDataProps = {
      ...userData,
      role: userData.email.includes("@admin") ? "admin" : "user",
    };
    console.log()
    dispatch(userLogin(userDataWithRole));
  };

  const handleLogout = () => {
    dispatch(userLogout());
  };

  return {
    userData,
    isLogged,
    authChecked,
    handleLogin,
    handleLogout,
  };
};

export default useAuthActions;
