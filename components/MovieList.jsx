import React from "react";
import MovieCard from "./MovieCard";
import SearchBar from "./SearchBar";

const MovieList = ({ movies, search, setSearch, genre, setGenre }) => {
  return (
    <div className="container">
      <SearchBar
        search={search}
        setSearch={setSearch}
        genre={genre}
        setGenre={setGenre}
      />

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {movies.length === 0 && (
        <p className="no-result">No movies found.</p>
      )}
    </div>
  );
};

export default MovieList;