// import { useState } from "react";
import { UserDataProps } from "../types";
import { useAppDispatch, useAppSelector } from "./store";
import { userLogin, userLogout } from "../store/auth/authSlice";
import { FormUserProps } from "../pages/LoginForm/LoginForm";

const useAuthActions = () => {
  const { userData, isLogged, authChecked } = useAppSelector(
    (state) => state.auth
  );
  // const [inputValue, setinputValue] = useState<UserDataProps>({
  //   username: "",
  //   email: "",
  //   password: "",
  //   role: "notAsigned",
  // });
  const dispatch = useAppDispatch();

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = event.target;
  //   setinputValue((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

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
    // inputValue,
    isLogged,
    authChecked,
    // handleChange,
    handleLogin,
    handleLogout,
  };
};

export default useAuthActions;
