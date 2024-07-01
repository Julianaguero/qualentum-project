import CartItemsList from "../components/ShoppingCart/CartItemsList";
import { useCartContext, useThemeContext } from "../hooks";
import { calcTotalPrice, priceToLocaleString, sumItems } from "../utils/shopUtils";

import "./ShoppingCart.css";



const ShoppingCart: React.FC = () => {
  const { theme } = useThemeContext();
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
        {cart.length > 0 && <span className="shopping-cart__total-price">
          Total a pagar: {priceToLocaleString(calcTotalPrice(cart))}{" "}
        </span>}
        
      </section>
    </main>
  );
};

export default ShoppingCart;

