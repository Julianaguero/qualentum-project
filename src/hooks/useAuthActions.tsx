import { useState } from "react";
import { UserDataProps } from "../types";
import { useAppDispatch, useAppSelector } from "./store";
import { userLogin, userLogout } from "../state/auth/authSlice";




const useAuthActions = () => {
 const { userData, isLogged, authChecked } = useAppSelector(state => state.auth)
 const [inputValue, setinputValue] = useState<UserDataProps>({ 
    username: "",
    email: "",
    role: "notAsigned"
})
 const dispatch = useAppDispatch()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setinputValue((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };

      const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const userDataWithRole:UserDataProps = {
          ...inputValue,
          role: inputValue.email.includes("@admin") ? "admin" : "user"
        }
        dispatch(userLogin(userDataWithRole))
      };

      const handleLogout = () => {
        dispatch(userLogout())
      };
    
    return {userData, inputValue, isLogged, authChecked, handleChange,handleLogin, handleLogout}
}

export default useAuthActions