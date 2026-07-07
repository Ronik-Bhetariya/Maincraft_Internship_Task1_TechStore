import { CATEGORIES } from '../api/products';

function ProductForm({ product, onChange, onSubmit, onCancel, isEditing }) {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    onChange({
      ...product,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  const categoryOptions = CATEGORIES.filter((c) => c !== 'All');

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>{isEditing ? 'Edit Product' : 'Add New Product'}</h2>

      <div className="form-group">
        <label htmlFor="name">Product Name</label>
        <input
          id="name"
          name="name"
          type="text"
          value={product.name}
          onChange={handleChange}
          placeholder="e.g. Wireless Headphones"
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group">
          <label htmlFor="price">Price (₹)</label>
          <input
            id="price"
            name="price"
            type="number"
            min="0"
            step="1"
            value={product.price}
            onChange={handleChange}
            placeholder="9999"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            value={product.category}
            onChange={handleChange}
            required
          >
            {categoryOptions.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Describe the product..."
          rows={3}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="image">Image URL</label>
        <input
          id="image"
          name="image"
          type="url"
          value={product.image}
          onChange={handleChange}
          placeholder="https://example.com/image.jpg"
          required
        />
      </div>

      <div className="form-group checkbox-group">
        <label>
          <input
            name="inStock"
            type="checkbox"
            checked={product.inStock}
            onChange={handleChange}
          />
          In Stock
        </label>
      </div>

      <div className="form-actions">
        <button type="button" className="btn btn-outline" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          {isEditing ? 'Update Product' : 'Add Product'}
        </button>
      </div>
    </form>
  );
}

export default ProductForm;
