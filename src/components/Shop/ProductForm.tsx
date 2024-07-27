import FormInput from "../Login/FormInput";
import CustomButton from "../Buttons/CustomButton";
import { v4 as uuidv4 } from "uuid";
import { type ProductProps } from "../../types";

import "./ProductForm.css";
import FormTextarea from "../Login/FormTextarea";
import { SubmitHandler, useForm } from "react-hook-form";

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

  const {register, watch, handleSubmit, setError, clearErrors, formState: { errors }} = useForm({
    defaultValues: initialProductState
  })

  const onSubmit : SubmitHandler<FormProductProps> = (data) => {
    CRUDAction(data);
    handleModal(false);
  };

  const handleProductValidation = (field: keyof FormProductProps) => {
    if(errors[field]){ 
      clearErrors(field)
    }

    const valueToWatch = watch(field);

    if((field === "title" || field === "category") && typeof valueToWatch === "string" && (valueToWatch.length < 4 || valueToWatch.length > 40) ) {
      setError(field, {
        message: `${field === "title" ? "El nombre" : "La categoría"} del producto debe contener entre 4 y 40 caracteres.`
      })
    }

    if(field === "description"&& typeof valueToWatch === "string" && (valueToWatch.length < 4 || valueToWatch.length > 500) ) {
      setError(field, {
        message: "La descrip  ción del producto debe contener entre 4 y 500 caracteres."
      })
    }

    if(field === "price" && typeof valueToWatch === "number" && valueToWatch < 1) {
      setError("price", {
        message: "El precio del producto no puede ser 0 ó menor a 0."
      })
    }
    
    if(field === "image"  && typeof valueToWatch === "string" && !valueToWatch.includes("http://")) {
      setError(field, {
        message:  "Debe ingresar una url válida."
      })
    }
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
            {...register("title", {
              required: "Debe ingresar un nombre de producto.",
              minLength: {
                value: 4,
                message: "El nombre del producto debe contener entre 4 y 40 caracteres."
              },
              maxLength: {
                value: 40,
                message: "El nombre del producto debe contener entre 4 y 40 caracteres."
              }
            })}
            autoFocus
            onBlur={() => handleProductValidation("title")}
            errorMessage={errors.title?.message}
          />
          <FormInput
            className="update-product__input"
            label="Price:"
            id="form__update-price"
            type="number"
            {...register("price", {
              required: "Debe ingresar el precio de producto.",
              min: {
                value: 1,
                message: "El precio del producto no puede ser 0 ó menor a 0."
              },
              max: {
                value: 100000,
                message: "El precio del producto no puede ser mayor a 100.000."
              },
            })}
            onBlur={() => handleProductValidation("price")}
            errorMessage={errors.price?.message}
          />
          <FormInput
            className="update-product__input"
            label="Categoria:"
            id="form__update-category"
            {...register("category", {
              required: "Debe ingresar una o mas categorías de producto.",
              minLength: {
                value: 4,
                message: "Debe ingresar un mínimo de 4 y un máximo 40 caracteres."
              },
              maxLength: {
                value: 40,
                message: "Debe ingresar un mínimo de 4 y un máximo 40 caracteres."
              }
            })}
            onBlur={() => handleProductValidation("category")}
            errorMessage={errors.category?.message}
          />
        </div>
        <div className="update-product__wrapper">
          <FormTextarea
            className="update-product__textarea"
            label="Descripcion:"
            id="form__description"
            {...register("description", {
              required: "Debe ingresar una descripción del producto.",
              minLength: {
                value: 4,
                message: "Debe ingresar un mínimo de 4 y un máximo 500 caracteres."
              },
              maxLength: {
                value: 500,
                message: "Debe ingresar un mínimo de 4 y un máximo 500 caracteres."
              }
            })}
            onBlur={() => handleProductValidation("description")}
            errorMessage={errors.description?.message}
          />
          <FormInput
            className="update-product__input"
            label="Imagen:"
            id="form__update-image"
            {...register("image", {
              required: "Debe ingresar url válida para la imagen del producto.",
              validate: (value) => value.includes("http://") || "Debe ingresar una url válida."
            })}
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
