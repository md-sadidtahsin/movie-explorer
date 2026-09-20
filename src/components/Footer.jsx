
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>Movie Explorer</p>
      <p>© {currentYear} Movie Explorer. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/md-sadidtahsin/movie-explorer" target="_blank" rel="noreferrer">
          GitHub
        </a>
        
      </div>
    </footer>
  );
}

export default Footer;
