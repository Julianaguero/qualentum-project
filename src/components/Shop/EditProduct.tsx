import { RiPencilLine, RiDeleteBin6Line } from "react-icons/ri";
import "./EditProduct.css"
import useProducts from "../../hooks/useProducts";
import { ProductProps } from "../../types";
import ProductForm from "./ProductForm";
import GenericModal from "../shared/GenericModal";
import useModal from "../../hooks/useModal";

interface Props {
  product: ProductProps,
}

const EditProduct : React.FC<Props> = ({product}) => {
  const { deleteProducts, updateProducts } = useProducts();
  const {isModalOpen, handleModal} = useModal()
  const { id : productId} = product;


  const handleDelete = () => {
    deleteProducts(productId);
  }

  const toggleModal = () => {
    handleModal(true)
  }

  return (
    <>
        <ul className="edit-product-container">
            <li><button onClick={toggleModal} className="edit-product__button"><RiPencilLine className="edit-product__icon"/></button></li>
            <li><button onClick={handleDelete} className="edit-product__button"><RiDeleteBin6Line className="edit-product__icon"/></button></li>
        </ul>
        <GenericModal onClose={handleModal}  isOpen={isModalOpen}>
          <ProductForm product={product} CRUDAction={updateProducts} actionType="update" handleModal={handleModal}/>
        </GenericModal>

    </>
  )
}

export default EditProduct