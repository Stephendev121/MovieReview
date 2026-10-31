import React from "react";
const SearchBar = ({ search, setSearch, genre, setGenre }) => (
  <div className="search-bar">
    <input
      type="text"
      placeholder="Search movies..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
    <select value={genre} onChange={(e) => setGenre(e.target.value)}>
      <option value="All">All Genres</option>
      <option value="Sci-Fi">Sci-Fi</option>
      <option value="Action">Action</option>
      <option value="Drama">Drama</option>
      <option value="Horror">Horror</option>
      <option value="Crime">Crime</option>
    </select>
  </div>
);
export default SearchBar;
