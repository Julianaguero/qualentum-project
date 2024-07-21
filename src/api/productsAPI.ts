import { ListOfProducts, ProductProps } from "../types";

const BASE_URL = "http://localhost:3000";


export const handleErrors = (error: unknown) => {
    if (error instanceof Error) {
        console.error("Error:", error.message);
    } else {
        console.error("Error desconocido:", error);
    }
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
        handleErrors(error);
        return [];
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
        handleErrors(error);
        return undefined;
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
        handleErrors(error);
        return null;
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
        handleErrors(error);
        return null;
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
        handleErrors(error);
    } 
};