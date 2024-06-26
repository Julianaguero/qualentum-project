import { createContext, useEffect, useRef, useState } from "react"
import { useLocalStorage } from "../hooks";
import { UserContextProps, UserContextProviderProps, UserDataProps } from "../types";



export const UserContext = createContext<UserContextProps | undefined>(undefined)

export default function UserContextProvider({children}: UserContextProviderProps) {
  const { setItem, getItem, removeItem } = useLocalStorage("userData");
  const getItemRef = useRef(getItem);
  
  const [isLogged, setIsLogged] = useState(false);
  const [userData, setUserData] = useState<UserDataProps>({
    username: "",
    email: "",
  });
  

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setItem(userData);
    setIsLogged(true);
  };

  const handleLogout = () => {
    removeItem();
    setUserData({ username: "", email: "" });
    setIsLogged(false);
    console.log(userData)
  };
    
    useEffect(() => {
        const userInLocalStorage: UserDataProps | undefined = getItemRef.current();
        if (userInLocalStorage && userInLocalStorage.username && userInLocalStorage.email) {
          setUserData({
            username: userInLocalStorage.username,
            email: userInLocalStorage.email
          });
          setIsLogged(true);
        }
      }, []);

    
  return (
    <UserContext.Provider value={{userData, isLogged, handleChange, handleLogout, handleLogin  }}>{children}</UserContext.Provider>
  )
}
