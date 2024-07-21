import { Link, useParams } from "react-router-dom";
import CustomButton from "../../components/Buttons/CustomButton";
import ProductNotFound from "../../components/Shop/ProductNotFound";
import CustomMessagePage from "../ErrorPage/CustomMessagePage";
import { useCartActions, useThemeActions } from "../../hooks";
import useProducts from "../../hooks/useProducts";
import { priceToLocaleString } from "../../utils/shopUtils";
import "./ProductPage.css";
import { useEffect } from "react";

const ProductPage = () => {
  const { theme } = useThemeActions();
  const { addItemToCart } = useCartActions();
  const { selectedProduct, isLoading, getProductsById, resetSelectedProduct } = useProducts();

  const { productId } = useParams<{ productId: string }>();
  const product = selectedProduct;

  useEffect(() => {
    if (productId) {
      getProductsById(productId)
    }
    return () => {
      resetSelectedProduct()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId])
  

  if (isLoading)
    <CustomMessagePage
      title="Cargando..."
      textInfo="No desesperes... ya casi estamos 😪"
    />;
  if (!product && undefined) <ProductNotFound />;

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
            <p className="product-page__category">
              Category: {product.category}
            </p>
            <p className="product-page__rating">
              Rating:{" "}
              <span className="product-page__rating-value">
                {product.rating.rate} ({product.rating.count})
              </span>
            </p>
            <span className="product-page__price">
              {priceToLocaleString(product.price)}
            </span>
            <div className="product-page__buttons-container">
              <CustomButton
                text="Agregar al carrito"
                action={() => addItemToCart(product)}
              />
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
