import { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar.jsx";
import MovieCard from "../components/MovieCard.jsx";
import MovieModal from "../components/MovieModal.jsx";

function Movies() {
  const [shows, setShows] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [isLoading, setIsLoading] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");

  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    let isCurrentRequest = true;

    async function fetchShows() {
      setIsLoading(true);
      setErrorMessage("");

      try {
        const url = searchText.trim()
          ? `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(searchText)}`
          : "https://api.tvmaze.com/shows";

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Something went wrong while fetching shows.");
        }

        const data = await response.json();

        const normalizedShows = searchText.trim()
          ? data.map((item) => item.show)
          : data;

        if (isCurrentRequest) {
          setShows(normalizedShows);
        }
      } catch (error) {
        if (isCurrentRequest) {
          setErrorMessage(error.message);
        }
      } finally {
        if (isCurrentRequest) {
          setIsLoading(false);
        }
      }
    }

    const timer = setTimeout(fetchShows, 400);

    return () => {
      isCurrentRequest = false;
      clearTimeout(timer);
    };
  }, [searchText]);

  return (
    <section className="movies-page">
      <h1>Browse Movies</h1>

      <SearchBar searchText={searchText} onSearchChange={setSearchText} />

      {isLoading && <p className="status-message">Loading movies...</p>}

      {errorMessage && <p className="status-message error">{errorMessage}</p>}

      {!isLoading && !errorMessage && shows.length === 0 && (
        <p className="status-message">No movies found. Try a different search.</p>
      )}

      <div className="movie-grid">
        {shows.map((show) => (
          <MovieCard key={show.id} show={show} onSeeDetails={setSelectedShow} />
        ))}
      </div>

      <MovieModal show={selectedShow} onClose={() => setSelectedShow(null)} />
    </section>
  );
}

export default Movies;
