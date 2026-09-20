import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <Link to="/" className="navbar-logo">
        <img src="/assets/logo.png" alt="Movie Explorer logo" className="navbar-logo-image" />
        <span>Movie Explorer</span>
      </Link>

      <nav className="navbar-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `navbar-link ${isActive ? "active" : ""}`.trim()
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/movies"
          className={({ isActive }) =>
            `navbar-link ${isActive ? "active" : ""}`.trim()
          }
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
