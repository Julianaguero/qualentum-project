import "./ProductCard.css";
import { type ProductProps } from "../../types";
import { priceToLocaleString } from "../../utils";
import { useThemeContext } from "../../hooks/useThemeContext";
import CustomButton from "../Buttons/CustomButton";
import useCartContext from "../../hooks/useCartContext";



export default function ProductCard({ product }: { product: ProductProps }) {
  const { addItemToCart } = useCartContext();
  const { theme } = useThemeContext();
  
  const { title, price, description, image } = product;

  return (
    <div id="card-product">
      <div className="card__img-container">
        <img src={image} alt={`${title} product image`} />
      </div>
      <div className={`card__content-wrapper ${theme}`} > 
        <h4 className="card-header">{title}</h4>
        <div className="card-body">
          <p>{description}</p>
        </div>
        <div className="card__price-container">
          <span>{priceToLocaleString(price)}</span>
          <CustomButton text="Agregar al carrito" action={() => addItemToCart(product)}/>
        </div>
      </div>
    </div>
  );
}
