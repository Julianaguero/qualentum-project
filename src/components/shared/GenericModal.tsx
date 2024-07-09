import { IoClose } from "react-icons/io5";
import "./GenericModal.css";

interface Props {
  children: React.ReactNode;
  onClose: (value: boolean) => void;
  isOpen: boolean;
}

const GenericModal: React.FC<Props> = ({ children, onClose, isOpen }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close-button" onClick={() => onClose(false)}>
              <IoClose />
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default GenericModal;
