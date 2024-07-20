// import { useState } from "react";
// import { ListOfProducts, ProductProps } from "../types";

// const BASE_URL = "http://localhost:3000";

// const useProductsAPI = () => {
//   const [products, setProducts] = useState<ListOfProducts>([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   const handleErrors = (error: unknown) => {
//     if (error instanceof Error) {
//       console.error("Error:", error.message);
//       setError(error.message);
//     } else {
//       console.error("Error desconocido:", error);
//       setError("Error desconocido");
//     }
//   };

//   const handleResponseErrors = (response: Response, customtext: string) => {
//     if (response.status === 404) {
//       throw new Error('Producto no encontrado');
//     } else if (response.status === 500) {
//       throw new Error('Error interno del servidor');
//     } else {
//       throw new Error(`${customtext}: ${response.statusText}`);
//     }
//   }

//   const getProducts = async (): Promise<void> => {
//     try {
//       setIsLoading(true);
//       const response = await fetch(`${BASE_URL}/products`);
//       if (!response.ok)
//         handleResponseErrors(response, "Error al obtener los productos");
//       const data = await response.json();
//       setProducts(data as ListOfProducts);
//       setError(null);
//       console.log("render")
//     } catch (error) {
//      handleErrors(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const createProducts = async (newProduct: ProductProps) => {
//     try {
//       setIsLoading(true);
//       const response = await fetch(`${BASE_URL}/products`, {
//         method: "POST", 
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newProduct),
//       })
//       if(!response.ok) {
//         handleResponseErrors(response, "Error al crear el producto");
//       }
//       const data : ProductProps= await response.json();
//       setProducts(prevProducts => ([
//         ...prevProducts,
//         newProduct
//       ]))
//       setError(null);
//       alert(`El producto ID: ${data.id} fue creado exitosamente.`);

//     } catch (error) {
//      handleErrors(error);
//     }
//     finally {
//       setIsLoading(false)
//     }
//   };

//   const updateProducts = async (productToUpdate: ProductProps) => {
//     try {
//       setIsLoading(true);
//       const response = await fetch(
//         `${BASE_URL}/products/${productToUpdate.id}`,
//         {
//           method: "PATCH",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(productToUpdate),
//         }
//       );
//       if (!response.ok) {
//         handleResponseErrors(response, "Error al modificar el producto");
//       }
//       const data = await response.json();
//       setProducts((prevProducts) =>
//         prevProducts.map((product) =>
//           product.id === productToUpdate.id
//             ? { ...product, ...productToUpdate }
//             : product
//         )
//       );
//       setError(null);
      
//       alert(
//         `El producto ID: "${data.id}" fue modificado correctamente en la base de datos.`
//       );
//     } catch (error) {
//      handleErrors(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const deleteProducts = async (productId: string) => {
//     try {
//       setIsLoading(true);
//       const response = await fetch(`${BASE_URL}/products/${productId}`, {
//         method: "DELETE",
//       });
//       if (!response.ok) {
//         handleResponseErrors(response, "Error al eliminar el producto");
//       }
//       setProducts(products.filter((product) => product.id !== productId));
//       setError(null);
//       alert(`El producto fue eliminado correctamente de la base de datos.`);
//     } catch (error) {
//      handleErrors(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return {
//     products,
//     setProducts,
//     isLoading,
//     error,
//     getProducts,
//     createProducts,
//     updateProducts,
//     deleteProducts,
//   } as const;
// };

// export default useProductsAPI;
