import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <li key={image.id} className={styles.item}>
          <img
            src={image.urls.small}
            alt={image.alt_description}
            onClick={() => onImageClick(image.urls.regular)}
            className={styles.image}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
