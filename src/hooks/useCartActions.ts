import { addItem, emptyCart } from "../store/cart/cartSlice";
import { ProductProps } from "../types";
import { useAppDispatch, useAppSelector } from "./store";



const useCartActions = () => {
    const cart = useAppSelector((state) => state.cart)

    const dispatch = useAppDispatch();

    const addItemToCart = (product: ProductProps) => {
        dispatch(addItem(product))
    }

    const emptyCartFromStore = () => {
        dispatch(emptyCart());
    }


    return { cart, addItemToCart, emptyCartFromStore }
}

export default useCartActions