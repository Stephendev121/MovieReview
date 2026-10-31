import React, { useState } from "react";

const ReviewForm = ({ movieId, addReview }) => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [user, setUser] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user || !comment) return alert("Fill all fields");
    addReview(movieId, {
      id: Date.now(),
      user,
      rating: parseInt(rating),
      comment,
      date: new Date().toISOString().split("T")[0],
    });
    setComment("");
    setUser("");
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <h3>Add Your Review</h3>
      <input
        placeholder="Your name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        <option value={5}>⭐⭐⭐⭐⭐ - Excellent</option>
        <option value={4}>⭐⭐⭐⭐ - Good</option>
        <option value={3}>⭐⭐⭐ - Average</option>
        <option value={2}>⭐⭐ - Poor</option>
        <option value={1}>⭐ - Bad</option>
      </select>
      <textarea
        placeholder="Write your review..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Submit Review</button>
    </form>
  );
};
export default ReviewForm;
