import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ onSubmit, onClick }) => {
  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    const query = document.querySelector('[name="query"]').value.trim();
    if (!query) {
      toast.error("Lütfen bir arama terimi girin!");
      return;
    }
    onSubmit(query);
    onClick(query);
  };
  
  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.searchContainer}>
          <input
            className={styles.input}
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit" className={styles.searchIcon} onClick={handleSubmit}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </form>
    </header>
  );
};

export default SearchBar;
