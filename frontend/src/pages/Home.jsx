import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import LoadingSpinner from '../components/LoadingSpinner';
import { getProducts } from '../api/products';

function Home({ showNotification }) {
  const [featured, setFeatured] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchFeatured() {
      try {
        const data = await getProducts();
        setFeatured(data.slice(0, 3));
      } catch {
        showNotification('Failed to load featured products', 'error');
      } finally {
        setLoading(false);
      }
    }
    fetchFeatured();
  }, [showNotification]);

  return (
    <>
      <Hero />
      <section className="section featured-section">
        <div className="container">
          <div className="section-header">
            <h2>Featured Products</h2>
            <p>Hand-picked tech essentials from our catalogue</p>
          </div>

          {loading ? (
            <LoadingSpinner message="Loading featured products..." />
          ) : (
            <>
              <div className="product-grid">
                {featured.map((product) => (
                  <ProductCard key={product._id} product={product} showActions={false} />
                ))}
              </div>
              <div className="section-cta">
                <Link to="/products" className="btn btn-primary">
                  View All Products
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      <section className="section about-section">
        <div className="container about-grid">
          <div className="about-card">
            <span className="about-icon">🔍</span>
            <h3>Search & Filter</h3>
            <p>Find products quickly by name or category.</p>
          </div>
          <div className="about-card">
            <span className="about-icon">⚙️</span>
            <h3>Full CRUD</h3>
            <p>Add, edit, and delete products with a modern API.</p>
          </div>
          <div className="about-card">
            <span className="about-icon">📱</span>
            <h3>Responsive</h3>
            <p>Works beautifully on desktop, tablet, and mobile.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
