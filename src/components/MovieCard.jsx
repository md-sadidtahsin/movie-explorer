
function MovieCard({ show, onSeeDetails }) {
  const posterUrl = show.image ? show.image.medium : null;
  const rating = show.rating && show.rating.average ? show.rating.average : "N/A";
  const year = show.premiered ? show.premiered.slice(0, 4) : "Unknown";

  return (
    <div className="movie-card">
      <div className="movie-card-poster">
        {posterUrl ? (
          <img src={posterUrl} alt={show.name} />
        ) : (
          <div className="movie-card-no-image">No Image</div>
        )}
      </div>

      <div className="movie-card-body">
        <h3>{show.name}</h3>
        <p className="movie-card-meta">
          ⭐ {rating} &nbsp;•&nbsp; 📅 {year}
        </p>
        <button onClick={() => onSeeDetails(show)}>See Details</button>
      </div>
    </div>
  );
}

export default MovieCard;
