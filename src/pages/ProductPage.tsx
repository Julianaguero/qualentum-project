import { Link, useParams } from "react-router-dom";
import productList from "../utils/data.json";
import "./ProductPage.css";
import { priceToLocaleString } from "../utils/shopUtils";
import { useCartContext, useThemeContext } from "../hooks";
import CustomButton from "../components/Buttons/CustomButton";

const ProductPage = () => {
  const {theme} = useThemeContext()
  const { addItemToCart } = useCartContext();

  const params = useParams<{ productId: string }>();
  const product = productList.find(item => item.id === Number(params.productId));

  return (
    <main className={`product-page ${theme}`}>
      {product ? (
        <article className="product-page__container">
          <div className="product-page__image-wrapper">
            <img
              className="product-page__image"
              src={product.image}
              alt={`Imagen del producto ${product.title}`}
            />
          </div>
          <div className="product-page__info">
            <h2 className="product-page__title">{product.title}</h2>
            <p className="product-page__description">{product.description}</p>
            <p className="product-page__category">Category: {product.category}</p>
            <p className="product-page__rating">
              Rating: <span className="product-page__rating-value">{product.rating.rate} ({product.rating.count})</span>
            </p>
            <span className="product-page__price">{priceToLocaleString(product.price)}</span>
            <div className="product-page__buttons-container">

            <CustomButton text="Agregar al carrito" action={() => addItemToCart(product)}/>
            <Link to="/">Volver a comprar {">"}</Link>
            </div>

          </div>
        </article>
      ) : (
        <div className="product-page__not-found">Product not found</div>
      )}
    </main>
  );
};

export default ProductPage;