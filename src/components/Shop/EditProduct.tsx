import { RiPencilLine, RiDeleteBin6Line } from "react-icons/ri";
import "./EditProduct.css"



const EditProduct = () => {
  return (
    <>
        <ul className="edit-product-container">
            <li><button className="edit-product__button"><RiPencilLine className="edit-product__icon"/></button></li>
            <li><button className="edit-product__button"><RiDeleteBin6Line className="edit-product__icon"/></button></li>
        </ul>

    </>
  )
}

export default EditProduct