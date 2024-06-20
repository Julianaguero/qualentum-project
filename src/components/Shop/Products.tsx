import "./Products.css";
import ProductCard from "./ProductCard";
import { type ListOfProducts, type ProductProps } from "../../types";

interface Props {
  products: ListOfProducts;
}


const Products : React.FC<Props> = ({products}) => {

  return (
    <section >
      <ul className="product-container">
        {products.map((product: ProductProps) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );  
}

export default Products