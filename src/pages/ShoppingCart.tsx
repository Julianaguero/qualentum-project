import CartItemsList from "../components/ShoppingCart/CartItemsList";
import { useCartContext } from "../hooks";
import { ThemeProps } from "../types";
import { calcTotalPrice, priceToLocaleString, sumItems } from "../utils/shopUtils";

import "./ShoppingCart.css";

interface Props {
  theme: ThemeProps;
}

const ShoppingCart: React.FC<Props> = ({ theme }) => {
  const { cart } = useCartContext();

  return (
    <main id="shopping-cart" className={`shopping-cart ${theme}`}>
      <section className="shopping-cart__list-container">
        <header className="shopping-cart__header">
          <h3 className="shopping-cart__title">YOUR CART ( {sumItems(cart)} )</h3>
        </header>
        <div className="shopping-cart__content">
          {cart.length === 0 && (
            <p className="shopping-cart__empty-message">
              Tu carrito está vacío... ¡Es tiempo de ir de compras! 🛒
            </p>
          )}
          {cart.length > 0 && <CartItemsList cart={cart}/>}
        </div>
        <span className="shopping-cart__total-price">
          Total a pagar: {priceToLocaleString(calcTotalPrice(cart))}{" "}
        </span>
      </section>
    </main>
  );
};

export default ShoppingCart;

