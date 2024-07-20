export type ProductProps = {
    "id": string,
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

export type ThemeProps = "dark" | "light"

// UserContextProps
export interface UserDataProps {
  username: string,
  email: string,
  role: "admin" | "user" | "notAsigned"
}

export type AuthContextProps = {
  userData: UserDataProps,
  isLogged: boolean,
  authChecked: boolean,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleLogin: (event: React.FormEvent<HTMLFormElement>) => void,
  handleLogout: () => void,
}

export type AuthContextProviderProps = ChildrenProp;

//CartContextProps
export type CartItemProps = {
  product: ProductProps;
  quantity: number;
};

//ProductsProviderProps
export type ProductsContextProps = {
  filteredProducts: ListOfProducts;
  products: ListOfProducts;
  isLoading: boolean;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  createProducts: (product: ProductProps) => void;
  updateProducts: (product: ProductProps) => void;
  deleteProducts: (productId: string) => void;
}

export type ProductsContextProviderProps = ChildrenProp;




