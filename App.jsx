import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { initialMovies } from "./data/movies";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import "./App.css";

function App() {

const STORAGE_KEY = "movies-v4";

  // const [movies, setMovies] = useState(() => {
  //   const saved = localStorage.getItem(STORAGE_KEY);
  //   return saved ? JSON.parse(saved) : initialMovies;
  // });
  const [movies, setMovies] = useState(initialMovies); 

  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("All");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(movies));
  }, [movies]);

  const addReview = (movieId, review) => {
    setMovies((prev) =>
      prev.map((m) =>
        m.id === movieId ? { ...m, reviews: [...m.reviews, review] } : m,
      ),
    );
  };

  const filtered = movies.filter((m) => {
    const matchSearch = m.title.toLowerCase().includes(search.toLowerCase());
    const matchGenre = genre === "All" || m.genre === genre;
    return matchSearch && matchGenre;
  });

  return (
    <Router>
      <div className="App">
        <header>
          <h1>🎬 MovieClass Views</h1>
        </header>
        <p className="para">MovieReview is a modern movie discovery and review platform built for you. 
          Explore movies across genres, discover upcoming releases, check ratings, and share your reviews – all in one place. 🎬</p>
        <Routes>
          <Route
            path="/"
            element={
              <MovieList
                movies={filtered}
                search={search}
                setSearch={setSearch}
                genre={genre}
                setGenre={setGenre}
              />
            }
          />
          <Route
            path="/movie/:id"
            element={<MovieDetail movies={movies} addReview={addReview} />}
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
