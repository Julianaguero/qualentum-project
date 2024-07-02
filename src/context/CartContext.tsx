import { createContext, useEffect, useRef, useState } from "react";
import {
  type CartContextProps,
  type CartContextProviderProps,
  type CartItemProps,
  type ProductProps,
} from "../types";
import { useLocalStorage } from "../hooks";

export const CartContext = createContext<CartContextProps>({
  cart: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  emptyCart: () => {},
});

export default function CartContextProvider({
  children,
}: CartContextProviderProps) {
  const { getItem, setItem, removeItem } = useLocalStorage("userCart");
  const getItemRef = useRef(getItem);

  const [cart, setCart] = useState<CartItemProps[] | []>([]);

  const addItemToCart = (product: ProductProps) => {
    const productInCartIndex = cart.findIndex(
      (item) => item.product.id === product.id
    );

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      setItem(newCart); 
      return setCart(newCart)
    } else {
      setCart((prevState) => [
        ...prevState,
        {
          product: product,
          quantity: 1,
        },
      ]);
      setItem([...cart, {product: product, quantity: 1}]); 
    }

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
      //update cart in localStorage
      setItem(newCart);
    }
  };

  const emptyCart = () => {
    setCart([]);
    removeItem();
  };

  useEffect(() => {
    const localCart: CartItemProps[] | undefined = getItemRef.current();
    if (localCart && localCart.length > 0) {
      return setCart(localCart);
    }
  }, []);

  return (
    <CartContext.Provider
      value={{ cart, addItemToCart, removeItemFromCart, emptyCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
