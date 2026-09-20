function SearchBar({ searchText, onSearchChange }) {
  return (
    <div className="search-bar">
      <span className="search-icon">🔍</span>
      <input
        type="text"
        placeholder="Search for a movie..."
        value={searchText}
        onChange={(event) => onSearchChange(event.target.value)}
      />
    </div>
  );
}

export default SearchBar;
