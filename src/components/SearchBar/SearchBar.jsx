import toast from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
    const handleSubmit = (e) => {
      e.preventDefault();
      const query = e.target.elements.query.value.trim();
      if (!query) {
        toast.error("Lütfen bir arama terimi girin!");
        return;
      }
      onSubmit(query);
    };
  
    return (
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header>
    );
  };
  
  export default SearchBar;