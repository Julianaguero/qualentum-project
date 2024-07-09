import { useState } from "react";
import { ListOfProducts, ProductProps } from "../types";

const BASE_URL = "http://localhost:3000"

const useProductsAPI = () => {
  const [products, setProducts] = useState<ListOfProducts>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);



  const getProducts = async (): Promise<void> => {
    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}/products`);
      if (!response.ok)
        throw new Error(`Error al obtener el producto: ${response.statusText}`);
      const data = await response.json();
      setProducts(data as ListOfProducts);
      setError(null);
      console.log("rendering products")
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error al obtener el producto:", error.message);
        setError(error.message);
      } else {
        console.error("Error desconocido", error);
        setError("Error desconocido");
      }
    } finally {
      setLoading(false);
    }
  };

  const updateProducts = async (updatedProduct: ProductProps) => {
    try {
      setLoading(true)
      const response = await fetch(`${BASE_URL}/products/${updatedProduct.id}`, {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct)
      })
      if (!response.ok) {
        throw new Error('Error al actualizar el producto');
      }
      const data = await response.json();
      setProducts(prevProducts => prevProducts.map(product => (
        product.id === updatedProduct.id ? {...product, ...updatedProduct} : product)))
      alert(`El producto ID: "${data.id}" fue modificado correctamente en la base de datos.`)
      console.log(data)
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error al obtener el producto:", error.message);
        setError(error.message);
      } else {
        console.error("Error desconocido", error);
        setError("Error desconocido");
      }
    } finally {
      setLoading(false);
    }
  }

  const deleteProducts = async (productId: string) => {
    try {
      setLoading(true)
      const response = await fetch(`${BASE_URL}/products/${productId}`, { method: "DELETE"})
      if(!response.ok) {
        throw Error(`Error al eliminar el producto, ${response.statusText}`)
      }
      // const data = await response.json() as ProductProps
      alert(`El producto fue eliminado correctamente de la base de datos.`)
      setProducts(products.filter(product => product.id !== productId))
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error al obtener el producto:", error.message);
        setError(error.message);
      } else {
        console.error("Error desconocido", error);
        setError("Error desconocido");
      }
    } finally {
      setLoading(false);
    }
  }

  return { products, setProducts, loading, error, getProducts, updateProducts, deleteProducts, } as const;
};

export default useProductsAPI;

// const config = {
//   method: config.method,
//   headers: {
//     "Content-Type": "application/json",
//     ...config.headers,
//   },
//   body: config.body  ? JSON.stringify(config.body) : undefined
// }