    import { useState } from "react"
    import { type ProductProps } from "../../types"
    import FormInput from "../Login/FormInput"
    import CustomButton from "../Buttons/CustomButton"

    import "./UpdateProductForm.css"

    interface Props {
        product: ProductProps,
        updateProducts: (product: ProductProps) => void;
    }

    const UpdateProductForm : React.FC<Props> = ({product, updateProducts}) => {
        const [productToUpdate, setProductToUpdate] = useState(product)
        
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            const {name, value } = event.target;
            setProductToUpdate(prevProduct => ({
                ...prevProduct,
                [name]: name === "price" ? (value === "" ? "" : parseFloat(value)) : value,
            }))
        }

        const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
            event.preventDefault()
            if (typeof productToUpdate.price === "string") {
                alert("El campo de precio no puede estar vacío y debe ser un número válido.");
                return;
              }
            updateProducts(productToUpdate);
        }
        

    return (
        <>
            <form onSubmit={handleSubmit} className="update-product__form">
                <h2>Editar producto:</h2>
                <FormInput className="update-product__input" label="Id:" id="form__update-id" name="id" value={productToUpdate.id} handleChange={handleChange} disabled/>
                <FormInput className="update-product__input" label="Title:" id="form__update-title" name="title" value={productToUpdate.title} handleChange={handleChange}/>
                <FormInput className="update-product__input" label="Price:" id="form__update-price" type="number" name="price"  value={productToUpdate.price} handleChange={handleChange}/>
                <FormInput className="update-product__input" label="Descripcion:" id="form__update-description"  name="description" value={productToUpdate.description} handleChange={handleChange}/>
                <FormInput className="update-product__input" label="Categoria:" id="form__update-category" name="category" value={productToUpdate.category} handleChange={handleChange}/>
                <FormInput className="update-product__input" label="Imagen:" id="form__update-image" name="image" value={productToUpdate.image} handleChange={handleChange}/>
                <CustomButton className="update-product__button" type="submit" text="Update product"></CustomButton>
            </form>
        </>
    )
    }

    export default UpdateProductForm

