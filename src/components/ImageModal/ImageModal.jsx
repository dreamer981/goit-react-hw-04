import Modal from "react-modal";

const ImageModal = ({ isOpen, onRequestClose, imageUrl }) => (
  <Modal isOpen={isOpen} onRequestClose={onRequestClose}>
    <img src={imageUrl} alt="Modal" />
  </Modal>
);

export default ImageModal;