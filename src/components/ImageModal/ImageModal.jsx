import Modal from "react-modal";
import styles from "./ImageModal.module.css";

const customStyles = {
  content: {
    position: "absolute",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "transparent", 
    padding: "0px",
    borderRadius: "10px",
    maxWidth: "90%", 
    maxHeight: "90%", 
    overflow: "hidden", 
    display: "flex",
    justifyContent: "center", 
    alignItems: "center", 
  },

  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)", 
    display: "flex",
    justifyContent: "center", 
    alignItems: "center", 
  },
};


const ImageModal = ({ isOpen, onRequestClose, imageUrl }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    style={customStyles}
  >
    <img src={imageUrl} alt="Modal" className={styles.image} />
  </Modal>
);

export default ImageModal;
