import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-brand">
          <span className="brand-icon">⚡</span>
          TechStore
        </Link>
        <nav className="navbar-links">
          <Link to="/" className={isActive('/') ? 'nav-link active' : 'nav-link'}>
            Home
          </Link>
          <Link
            to="/products"
            className={isActive('/products') ? 'nav-link active' : 'nav-link'}
          >
            Products
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
