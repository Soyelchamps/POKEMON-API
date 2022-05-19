import "./search-box.styles.css";

const SearchBox = ({ onSearchChange }) => {
  return (
    <input
      className="search-box"
      type="search"
      placeholder="Buscar Pokemon..."
      onChange={onSearchChange}
    />
  );
};

export default SearchBox;
