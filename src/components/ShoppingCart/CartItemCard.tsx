import { CartItemProps } from "../../context/CartContext"
import { priceToLocaleString } from "../../utils/shopUtils";

interface Props {
    item: CartItemProps;
}


const CartItemCard : React.FC<Props> = ({item}) => {
    const {product, quantity } = item;

    return (
        <li className="shopping-cart__item" key={product.id}>
            <div className="shopping-cart__item-image-container">
              <a href="#" className="shopping-cart__item-image-link">
                <img
                  src={product.image}
                  alt={`photo of ${product.title}`}
                  className="shopping-cart__item-image"
                />
                <span className="shopping-cart__cart-counter">
                  {quantity}
                </span>
              </a>
            </div>
            <div className="shopping-cart__item-details">
              <a href="#" className="shopping-cart__item-details-link">
                <h5 className="shopping-cart__item-title">
                  {product.title}
                </h5>
              </a>
              <p className="shopping-cart__item-price">
                Precio por unidad:{" "}
                <span>{priceToLocaleString(product.price)}</span>
              </p>
              <p className="shopping-cart__item-total-price">
                Precio total:{" "}
                <span>
                  {priceToLocaleString(product.price * quantity)}
                </span>
              </p>
            </div>
          </li>
    )
}


export default CartItemCard