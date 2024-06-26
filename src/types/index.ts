export type ProductProps = {
    "id": number,
    "title": string,
    "price": number,
    "description":string,
    "category": string,
    "image": string,
    "rating": {
      "rate": number,
      "count": number,
    }
}

export type ListOfProducts = ProductProps[];

//ThemeContext Props
export type ThemeContextProviderProps = {
  children: React.ReactNode;
}

export type ThemeProps = "dark" | "light"

export type ThemeContextProps = {
  theme: ThemeProps;
  toggleTheme: () => void;
}


// UserContextProps
export interface UserDataProps {
  username: string,
  email: string,
}

export type UserContextProps = {
  userData: UserDataProps,
  isLogged: boolean,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleLogin: (event: React.FormEvent<HTMLFormElement>) => void,
  handleLogout: () => void,
}

export type UserContextProviderProps = {
  children: React.ReactNode;
}