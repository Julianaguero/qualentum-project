import "./ProductCard.css";
import { type ProductProps } from "../../types";
import { priceToLocaleString } from "../../utils/shopUtils";
import { useThemeContext } from "../../hooks/";
import CustomButton from "../Buttons/CustomButton";
import useCartContext from "../../hooks/useCartContext";
import { Link } from "react-router-dom";
import useAuthContext from "../../hooks/useAuthContext";
import EditProduct from "./EditProduct";

export default function ProductCard({ product }: { product: ProductProps }) {
  const { isLogged, userData } = useAuthContext();
  const { addItemToCart } = useCartContext();
  const { theme } = useThemeContext();

  const { id, title, price, description, image } = product;

  return (
    <div className="card-product-container">
      {userData.role === "admin" && <EditProduct product={product}/>}
      <Link id="card-product" to={`/product/${id}`}>
        <div className="card__img-container">
          <img src={image} alt={`${title} product image`} />
        </div>
        <div className={`card__content-wrapper ${theme}`}>
          <h4 className="card-header">{title}</h4>
          <div className="card-body">
            <p>{description}</p>
          </div>
          <div className="card__price-container">
            <span>{priceToLocaleString(price)}</span>
          </div>
        </div>
      </Link>
      {isLogged && (
        <CustomButton
          text="Agregar al carrito"
          className="card__button"
          action={() => addItemToCart(product)}
        />
      )}
    </div>
  );
}
