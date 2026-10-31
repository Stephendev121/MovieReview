import React from "react";
import { useParams, Link } from "react-router-dom";
import ReviewForm from "./ReviewForm";

const MovieDetail = ({ movies, addReview }) => {
  const { id } = useParams();
  const movie = movies.find((m) => m.id === parseInt(id));
  if (!movie) return <p>Movie not found</p>;

  const avg = movie.reviews.length
    ? (
        movie.reviews.reduce((a, b) => a + b.rating, 0) / movie.reviews.length
      ).toFixed(1)
    : "No ratings yet";

  return (
    <div className="detail-page">
      <Link to="/" className="back">
        ← Back
      </Link>
      <div className="detail-top">
        <img src={movie.poster} alt={movie.title} />
        <div>
          <h2>{movie.title}</h2>
          <p>
            {movie.year} • {movie.genre} • ⭐ {avg}
          </p>
          <p>{movie.description}</p>
        </div>
      </div>
      <ReviewForm movieId={movie.id} addReview={addReview} />
      <div className="reviews">
        <h3>Reviews ({movie.reviews.length})</h3>
        {movie.reviews
          .slice()
          .reverse()
          .map((r) => (
            <div key={r.id} className="review">
              <strong>{r.user}</strong> - {"⭐".repeat(r.rating)}{" "}
              <small>{r.date}</small>
              <p>{r.comment}</p>
            </div>
          ))}
      </div>
    </div>
  );
};
export default MovieDetail;
