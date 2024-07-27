import FormInput from "../Login/FormInput";
import CustomButton from "../Buttons/CustomButton";
import { v4 as uuidv4 } from "uuid";
import { type ProductProps } from "../../types";

import "./ProductForm.css";
import FormTextarea from "../Login/FormTextarea";
import { SubmitHandler, useForm } from "react-hook-form";
import { productValidationRules } from "../../utils/FormValidationRules";

type FormProductProps = ProductProps;

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

  const {register, trigger, handleSubmit, formState: { errors }} = useForm({
    defaultValues: initialProductState
  })

  const onSubmit : SubmitHandler<FormProductProps> = (data) => {
    CRUDAction(data);
    handleModal(false);
  };

  const handleProductValidation = (field: keyof FormProductProps) => {
    trigger(field)
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="update-product__form">
        <h2>
          {actionType === "create" ? "Crear Producto" : "Editar producto"}:
        </h2>
        <div>
          <FormInput
            className="update-product__input"
            label="Id:"
            id="form__update-id"
            disabled
            {...register("id")}
          />
          <FormInput
            className="update-product__input"
            label="Title:"
            id="form__update-title"
            {...register("title", productValidationRules.title)}
            autoFocus
            onBlur={() => handleProductValidation("title")}
            errorMessage={errors.title?.message}
          />
          <FormInput
            className="update-product__input"
            label="Price:"
            id="form__update-price"
            type="number"
            {...register("price", productValidationRules.price)}
            onBlur={() => handleProductValidation("price")}
            errorMessage={errors.price?.message}
          />
          <FormInput
            className="update-product__input"
            label="Categoria:"
            id="form__update-category"
            {...register("category", productValidationRules.category)}
            onBlur={() => handleProductValidation("category")}
            errorMessage={errors.category?.message}
          />
        </div>
        <div className="update-product__wrapper">
          <FormTextarea
            className="update-product__textarea"
            label="Descripcion:"
            id="form__description"
            {...register("description", productValidationRules.description)}
            onBlur={() => handleProductValidation("description")}
            errorMessage={errors.description?.message}
          />
          <FormInput
            className="update-product__input"
            label="Imagen:"
            id="form__update-image"
            {...register("image", productValidationRules.image)}
            onBlur={() => handleProductValidation("image")}
            errorMessage={errors.image?.message}
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
