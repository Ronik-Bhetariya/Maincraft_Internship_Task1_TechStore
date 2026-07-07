import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <span className="hero-badge">Welcome to TechStore</span>
          <h1>Discover the Latest Tech Products</h1>
          <p>
            Your one-stop shop for premium electronics, accessories, and gadgets.
            Browse our curated catalogue, manage inventory, and find the perfect
            tech for work and play.
          </p>
          <Link to="/products" className="btn btn-primary btn-lg">
            Browse Products
          </Link>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <div className="hero-card-icon">🛒</div>
            <h3>Smart Shopping</h3>
            <p>Search, filter, and explore products with ease.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
