import { ListOfProducts, ProductProps } from "../types";

const BASE_URL = "http://localhost:3000";


export const handleErrorsMessages = (error: unknown):string => {
    // if (error instanceof Error) {
    //     console.error("Error:", error.message);
    // } else {
    //     console.error("Error desconocido:", error);
    // }
    if (error instanceof Error) {
        // Verifica si el mensaje del error es 'Failed to fetch' o cualquier otro mensaje de error relacionado con problemas de red
        if (error.message === 'Failed to fetch') {
            return "Problema de conexión con el servidor";
        }
        return error.message;
    }
    return "Unknown error occurred";
};

const handleResponseErrors = (response: Response, customtext: string) => {
    if (response.status === 404) {
        throw new Error('Producto no encontrado');
    } else if (response.status === 500) {
        throw new Error('Error interno del servidor');
    } else {
        throw new Error(`${customtext}: ${response.statusText}`);
    }
}

export const getProducts = async (): Promise<ListOfProducts> => {
    try {
        const response: Response = await fetch(`${BASE_URL}/products`);
        if (!response.ok)
            handleResponseErrors(response, "Error al obtener los productos");
        const data : ListOfProducts  = await response.json() ;
        return data ;

    } catch (error) {
        // Aquí captura errores relacionados con la red o el fetch
        const errorMessage = handleErrorsMessages(error);
        throw new Error(errorMessage); 
    }
};

export const getProductsById = async (productId : string): Promise<ProductProps | undefined >=> {
    try {
        const response: Response = await fetch(`${BASE_URL}/products/${productId}`);
        if (!response.ok)
            handleResponseErrors(response, "Error al obtener los productos");
        const data : ProductProps  = await response.json() ;
        return data ;

    } catch (error) {
       // Aquí captura errores relacionados con la red o el fetch
       const errorMessage = handleErrorsMessages(error);
       throw new Error(errorMessage); 
    }
};

export const createProducts = async (newProduct: ProductProps): Promise<ProductProps | null> => {
    try {
        const response = await fetch(`${BASE_URL}/products`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newProduct),
        })
        if (!response.ok) {
            handleResponseErrors(response, "Error al crear el producto");
        }
        const data: ProductProps = await response.json();
        alert(`El producto ID: ${data.id} fue creado exitosamente.`);
        return data

    } catch (error) {
      // Aquí captura errores relacionados con la red o el fetch
        const errorMessage = handleErrorsMessages(error);
        throw new Error(errorMessage); 
    }
};

export const updateProducts = async (productToUpdate: ProductProps): Promise<ProductProps | null> => {
    try {
        const response = await fetch(
            `${BASE_URL}/products/${productToUpdate.id}`,
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(productToUpdate),
            }
        );
        if (!response.ok) {
            handleResponseErrors(response, "Error al modificar el producto");
        }
        const data : ProductProps = await response.json();
 
        alert(
            `El producto ID: "${data.id}" fue modificado correctamente en la base de datos.`
        );
        return data
    } catch (error) {
      // Aquí captura errores relacionados con la red o el fetch
        const errorMessage = handleErrorsMessages(error);
        throw new Error(errorMessage); 
    } 
    
};

export const deleteProducts = async (productId: string) => {
    try {
        const response = await fetch(`${BASE_URL}/products/${productId}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            handleResponseErrors(response, "Error al eliminar el producto");
        }
        const data : ProductProps = await response.json();
        alert(`El producto ID: "${data.id}" fue eliminado correctamente de la base de datos.`);
        return data
    } catch (error) {
         // Aquí captura errores relacionados con la red o el fetch
         const errorMessage = handleErrorsMessages(error);
         throw new Error(errorMessage); 
    } 
};