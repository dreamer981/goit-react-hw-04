import axios from "axios";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [query, setQuery] = useState("");


  const handleSearch = async (query, page = 1) => {
    setQuery(query); // query state'ini güncelle
    try {
      setIsLoading(true);
      const response = await axios.get("https://api.unsplash.com/search/photos", {
        params: {
          query,
          per_page: 12,
          page,
          client_id: import.meta.env.VITE_UNSPLASH_ACCESS_KEY,
        },
      });
      setIsLoading(false);
  
      if (page === 1) {
        setImages(response.data.results);
      } else {
        setImages((prev) => [...prev, ...response.data.results]);
      }
  
      toast.success("Arama başarılı!");
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
      toast.error("Bir hata oluştu!");
    }
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
    handleSearch(query, page + 1); // query ve yeni sayfa numarası ile arama yap
  };

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Toaster />
      <SearchBar onSubmit={handleSearch} />
      {/* Diğer bileşenler buraya eklenecek */}
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal
        isOpen={!!selectedImage}
        onRequestClose={closeModal}
        imageUrl={selectedImage}
      />
    </div>
  );
};

export default App;
