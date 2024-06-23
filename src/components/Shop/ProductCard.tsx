import "./ProductCard.css";
import { type ProductProps } from "../../types";
import { priceToLocaleString } from "../../utils";
import { useThemeContext } from "../../hooks/useThemeContext";



export default function ProductCard({ product }: { product: ProductProps }) {
  const { title, price, description, image } = product;

  const { theme } = useThemeContext();

  return (
    <a id="card-product" href="#" >
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
        </div>
      </div>
    </a>
  );
}
