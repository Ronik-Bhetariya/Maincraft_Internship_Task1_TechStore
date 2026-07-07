import { useEffect, useState } from 'react';
import { formatPrice } from '../utils/formatPrice';
import { FALLBACK_PRODUCT_IMAGE } from '../utils/productImages';

function ProductCard({ product, onEdit, onDelete, showActions = true }) {
  const { _id, name, price, category, description, image, inStock } = product;
  const [imgSrc, setImgSrc] = useState(image || FALLBACK_PRODUCT_IMAGE);

  useEffect(() => {
    setImgSrc(image || FALLBACK_PRODUCT_IMAGE);
  }, [image]);

  const handleImageError = () => {
    if (imgSrc !== FALLBACK_PRODUCT_IMAGE) {
      setImgSrc(FALLBACK_PRODUCT_IMAGE);
    }
  };

  return (
    <article className="product-card">
      <div className="product-card-image">
        <img src={imgSrc} alt={name} loading="lazy" onError={handleImageError} />
        <span className={`stock-badge ${inStock ? 'in-stock' : 'out-of-stock'}`}>
          {inStock ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>
      <div className="product-card-body">
        <span className="product-category">{category}</span>
        <h3 className="product-name">{name}</h3>
        <p className="product-description">{description}</p>
        <div className="product-card-footer">
          <span className="product-price">{formatPrice(price)}</span>
          {showActions && (
            <div className="product-actions">
              <button
                type="button"
                className="btn btn-outline btn-sm"
                onClick={() => onEdit(product)}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger btn-sm"
                onClick={() => onDelete(_id)}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
