const ImageGallery = ({ images, onImageClick }) => {
    return (
      <ul>
        {images.map((image) => (
          <li key={image.id}>
            <img    src={image.urls.small}
              alt={image.alt_description}
              onClick={() => onImageClick(image.urls.regular)} />
          </li>
        ))}
      </ul>
    );
  };
  
  export default ImageGallery;