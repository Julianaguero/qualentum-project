import { useState } from "react";
import FormInput from "../Login/FormInput";
import CustomButton from "../Buttons/CustomButton";
import { v4 as uuidv4 } from "uuid";
import { type ProductProps } from "../../types";

import "./ProductForm.css";
import FormTextarea from "../Login/FormTextarea";

interface Props {
  product?: ProductProps;
  CRUDAction: (product: ProductProps) => void;
  actionType: "create" | "update";
  handleModal: (value: boolean) => void;
}

const ProductForm: React.FC<Props> = ({
  product,
  CRUDAction,
  actionType,
  handleModal,
}) => {
  const initialProductState = product || {
    id: uuidv4(),
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
    rating: {
      rate: 0,
      count: 0,
    },
  };

  const [productToUpdate, setProductToUpdate] =
    useState<ProductProps>(initialProductState);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setProductToUpdate((prevProduct) => ({
      ...prevProduct,
      [name]:
        name === "price" ? (value === "" ? "" : parseFloat(value)) : value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (
      typeof productToUpdate.price === "string" ||
      isNaN(productToUpdate.price)
    ) {
      alert(
        "El campo de precio no puede estar vacío y debe ser un número válido."
      );
      return;
    }
    CRUDAction(productToUpdate);
    handleModal(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="update-product__form">
        <h2>
          {actionType === "create" ? "Crear Producto" : "Editar producto"}:
        </h2>
        <div>
          <FormInput
            className="update-product__input"
            label="Id:"
            id="form__update-id"
            name="id"
            value={productToUpdate.id}
            handleChange={handleChange}
            disabled
          />
          <FormInput
            className="update-product__input"
            label="Title:"
            id="form__update-title"
            name="title"
            value={productToUpdate.title}
            handleChange={handleChange}
          />
          <FormInput
            className="update-product__input"
            label="Price:"
            id="form__update-price"
            type="number"
            name="price"
            value={productToUpdate.price}
            handleChange={handleChange}
          />
          <FormInput
            className="update-product__input"
            label="Categoria:"
            id="form__update-category"
            name="category"
            value={productToUpdate.category}
            handleChange={handleChange}
          />
        </div>
        <div className="update-product__wrapper">
          <FormTextarea
            className="update-product__textarea"
            label="Descripcion:"
            id="form__description"
            name="description"
            value={productToUpdate.description}
            handleChange={handleChange}
          />
          <FormInput
            className="update-product__input"
            label="Imagen:"
            id="form__update-image"
            name="image"
            value={productToUpdate.image}
            handleChange={handleChange}
          />
        </div>
        <CustomButton
          className="update-product__button"
          type="submit"
          text={
            actionType === "create" ? "Crear producto" : "Actualizar producto"
          }
        />
      </form>
    </>
  );
};

export default ProductForm;
