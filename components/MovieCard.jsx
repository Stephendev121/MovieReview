import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const avg = movie.reviews.length
    ? (
        movie.reviews.reduce((a, b) => a + b.rating, 0) / movie.reviews.length
      ).toFixed(1)
    : "New";
  return (
    <Link to={`/movie/${movie.id}`} className="card">
      <img src={movie.poster} alt={movie.title} />
      <div className="card-info">
        <h3>
          {movie.title} ({movie.year})
        </h3>
        <span className="badge">{movie.genre}</span>
        <p>
          ⭐ {avg} | {movie.reviews.length} reviews
        </p>
      </div>
    </Link>
  );
};
export default MovieCard;
