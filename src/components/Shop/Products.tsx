import "./Products.css";
import ProductCard from "./ProductCard";
import { type ListOfProducts, type ProductProps } from "../../types";
import ProductNotFound from "./ProductNotFound";
import useAuthContext from "../../hooks/useAuthContext";
import CreateProductButton from "../Buttons/CreateProductButton";

interface Props {
  products: ListOfProducts;
}


const Products : React.FC<Props> = ({products}) => {
  const { userData }  = useAuthContext()

  if(products.length === 0) return <ProductNotFound />

  return (
    <section >
      <ul className="products-container">
        {userData.role === "admin" && (
          <CreateProductButton />
        ) }
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