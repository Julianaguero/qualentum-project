import { createContext, useState } from "react";
import { type ProductProps } from "../types";

export type CartContextProviderProps = {
  children: React.ReactNode;
};

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

export const CartContext = createContext<CartContextProps>({
  cart: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  emptyCart: () => {},
});

export default function CartContextProvider({
  children,
}: CartContextProviderProps) {
  const [cart, setCart] = useState<CartItemProps[] | []>([]);

  const addItemToCart = (product: ProductProps) => {
    const productInCartIndex = cart.findIndex(
      (item) => item.product.id === product.id
    );

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      return setCart(newCart);
    }

    return setCart((prevState) => [
      ...prevState,
      {
        product: product,
        quantity: 1,
      },
    ]);
  };

  const removeItemFromCart = (product: ProductProps) => {
    const productInCartIndex = cart.findIndex(
      (item) => item.product.id === product.id
    );

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity -= 1;

      if (newCart[productInCartIndex].quantity === 0) {
        newCart.splice(productInCartIndex, 1);
      }

      setCart(newCart);
    }
  };

  const emptyCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{ cart, addItemToCart, removeItemFromCart, emptyCart}}>
      {children}
    </CartContext.Provider>
  );
}
