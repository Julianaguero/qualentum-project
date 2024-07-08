import { CartItemProps } from "../../types";
import CartItemCard from "./CartItemCard";

interface CartItemsListProps {
    cart: CartItemProps[];
  }
  
  const CartItemsList: React.FC<CartItemsListProps> = ({ cart }) => {
    
    return (
      <ul className="shopping-cart__list">
        {cart.map((item) => (
          <CartItemCard key={item.product.id} item={item}/>
        ))}
      </ul>
    );
  };

  
export default CartItemsList