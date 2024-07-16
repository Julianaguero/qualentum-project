import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../../components/Buttons/CustomButton";
import CartItemsList from "../../components/ShoppingCart/CartItemsList";
import { useThemeContext } from "../../hooks";
import { calcTotalPrice, priceToLocaleString, sumItems } from "../../utils/shopUtils";
import { type RootState } from "../../state/store";
import {emptyCart} from "../../state/cart/cartSlice"

import "./ShoppingCart.css";



const ShoppingCart: React.FC = () => {
  const { theme } = useThemeContext();
  // const { cart, emptyCart } = useCartContext();
  const dispatch = useDispatch()
  const cart = useSelector((state: RootState) => state.cart.cart)

  const handleCheckout = () => {
    alert("Esta siendo redirigido a la pasarela de pago. <3");
    dispatch(emptyCart());
  }

  const handleEmptyCart = () => {
    dispatch(emptyCart());
  }

  return (
    <main id="shopping-cart" className={`shopping-cart ${theme}`}>
      <section className="shopping-cart__list-container">
        <header className="shopping-cart__header">
          <h3 className="shopping-cart__title">TU CARRITO ( {sumItems(cart)} )</h3>
        </header>
        <div className="shopping-cart__content">
          {cart.length === 0 && (
            <p className="shopping-cart__empty-message">
              Tu carrito está vacío... ¡Es tiempo de ir de compras! 🛒
            </p>
          )}
          {cart.length > 0 && <CartItemsList cart={cart}/>}
        </div>
        {cart.length > 0 && <span className="shopping-cart__total-price">
          Total a pagar: {priceToLocaleString(calcTotalPrice(cart))}{" "}
        </span>}
        {cart.length > 0 && (
          <div className="shopping-cart__button-container">
            <CustomButton text="Finalizar Compra" action={handleCheckout}  />
            <CustomButton text="Vaciar carrito 😪" action={handleEmptyCart} className="secondary-button" />
          </div>
        )}
      </section>
    </main>
  );
};

export default ShoppingCart;

