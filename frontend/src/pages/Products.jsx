import { useCallback, useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import ProductForm from '../components/ProductForm';
import LoadingSpinner from '../components/LoadingSpinner';
import EmptyState from '../components/EmptyState';
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  emptyProduct,
  CATEGORIES,
} from '../api/products';

function Products({ showNotification }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(emptyProduct);
  const [editingId, setEditingId] = useState(null);

  const fetchProducts = useCallback(async () => {
    setLoading(true);
    try {
      const params = {};
      if (search.trim()) params.search = search.trim();
      if (category !== 'All') params.category = category;
      const data = await getProducts(params);
      setProducts(data);
    } catch {
      showNotification('Failed to load products', 'error');
    } finally {
      setLoading(false);
    }
  }, [search, category, showNotification]);

  useEffect(() => {
    const debounce = setTimeout(fetchProducts, 300);
    return () => clearTimeout(debounce);
  }, [fetchProducts]);

  const openAddForm = () => {
    setFormData(emptyProduct);
    setEditingId(null);
    setShowForm(true);
  };

  const openEditForm = (product) => {
    setFormData({
      name: product.name,
      price: product.price,
      category: product.category,
      description: product.description,
      image: product.image,
      inStock: product.inStock,
    });
    setEditingId(product._id);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setFormData(emptyProduct);
    setEditingId(null);
  };

  const handleSubmit = async () => {
    const payload = {
      ...formData,
      price: Number(formData.price),
    };

    try {
      if (editingId) {
        await updateProduct(editingId, payload);
        showNotification('Product updated successfully');
      } else {
        await createProduct(payload);
        showNotification('Product added successfully');
      }
      closeForm();
      fetchProducts();
    } catch {
      showNotification(
        editingId ? 'Failed to update product' : 'Failed to add product',
        'error'
      );
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this product?')) return;

    try {
      await deleteProduct(id);
      showNotification('Product deleted successfully');
      fetchProducts();
    } catch {
      showNotification('Failed to delete product', 'error');
    }
  };

  return (
    <section className="section products-page">
      <div className="container">
        <div className="page-header">
          <div>
            <h1>Products</h1>
            <p>Manage your tech store catalogue</p>
          </div>
          <button type="button" className="btn btn-primary" onClick={openAddForm}>
            + Add Product
          </button>
        </div>

        <div className="filters-bar">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search by product name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>
                {cat === 'All' ? 'All Categories' : cat}
              </option>
            ))}
          </select>
        </div>

        {loading ? (
          <LoadingSpinner message="Loading products..." />
        ) : products.length === 0 ? (
          <EmptyState
            title="No products found"
            message={
              search || category !== 'All'
                ? 'Try adjusting your search or filter.'
                : 'Get started by adding your first product.'
            }
            actionLabel={!search && category === 'All' ? 'Add Product' : undefined}
            onAction={!search && category === 'All' ? openAddForm : undefined}
          />
        ) : (
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
                onEdit={openEditForm}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}
      </div>

      {showForm && (
        <div className="modal-overlay" onClick={closeForm}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <ProductForm
              product={formData}
              onChange={setFormData}
              onSubmit={handleSubmit}
              onCancel={closeForm}
              isEditing={!!editingId}
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default Products;
