import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>Discover Movies</h1>
        <p>
          Explore and discover your favorite <br/> movies from around the world.
        </p>
        <Link to="/movies" className="hero-cta">
          Explore Now
        </Link>
      </div>
    </section>
  );
}

export default Home;
