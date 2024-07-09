import useModal from "../../hooks/useModal";
import useProducts from "../../hooks/useProducts";
import GenericModal from "../shared/GenericModal";
import ProductForm from "../Shop/ProductForm";
import "./CreateProductButton.css"
import { IoMdAdd } from "react-icons/io";



const CreateProductButton = () => {

   const {isModalOpen, handleModal } = useModal(); 
   const { createProducts } = useProducts()


  return (
    <>
        <button onClick={() => handleModal(true)} className="create-product__button"><IoMdAdd className="create-product__icon"/></button>
        <GenericModal isOpen={isModalOpen} onClose={handleModal}>
            <ProductForm  CRUDAction={createProducts} actionType="create" handleModal={handleModal}/>
        </GenericModal>
    </>
  )
}

export default CreateProductButton