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

type ChildrenProp = {children: React.ReactNode}

export type ListOfProducts = ProductProps[];

//ThemeContext Props
export type ThemeContextProviderProps = ChildrenProp;

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

export type AuthContextProps = {
  userData: UserDataProps,
  isLogged: boolean,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleLogin: (event: React.FormEvent<HTMLFormElement>) => void,
  handleLogout: () => void,
}

export type AuthContextProviderProps = ChildrenProp;

//CartContextProps
export type CartContextProviderProps = ChildrenProp;

export type CartContextProps = {
  cart: CartItemProps[];
  addItemToCart: (products: ProductProps) => void;
  removeItemFromCart: (product: ProductProps) => void;
  emptyCart: () => void;
};

export type CartItemProps = {
  product: ProductProps;
  quantity: number;
};

//ProductsProviderProps
export type ProductsContextProps = {
  filteredProducts: ListOfProducts;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

export type ProductsContextProviderProps = {
  children: React.ReactNode
}


