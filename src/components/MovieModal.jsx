function MovieModal({ show, onClose }) {
  if (!show) return null;

  const backdropUrl = show.image ? show.image.original : null;
  const rating = show.rating && show.rating.average ? show.rating.average : "N/A";
  const genres = show.genres && show.genres.length > 0 ? show.genres.join(", ") : "Unknown";


  function removeHtmlTags(html) {
    if (!html) return "No summary available.";
    return html.replace(/<[^>]+>/g, "");
  }

  function handleBackdropClick(event) {
    if (event.target === event.currentTarget) {
      onClose();
    }
  }

  return (
    <div className="modal-overlay" onClick={handleBackdropClick}>
      <div className="modal-box">
        <button className="modal-close-btn" onClick={onClose}>
          ✕
        </button>

        {backdropUrl && (
          <img className="modal-backdrop" src={backdropUrl} alt={show.name} />
        )}

        <div className="modal-content">
          <h2>{show.name}</h2>
          
          <p className="movie-card-meta">
            ⭐ Rating: {rating} &nbsp;|&nbsp; 📅 Premiered: {show.premiered || "Unknown"}
          </p>
          <p className="movie-card-meta">Genre: {genres}</p>
          
          <p><h4>Overview</h4></p>
          <p>{removeHtmlTags(show.summary)}</p>

          <button className="modal-close-btn-bottom" onClick={onClose}>
           ❌ Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieModal;
