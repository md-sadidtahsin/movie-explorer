
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {currentYear} MovieExplorer. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com" target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a href="https://www.tvmaze.com/api" target="_blank" rel="noreferrer">
          Powered by TVmaze API
        </a>
      </div>
    </footer>
  );
}

export default Footer;
