const Product = require('./models/Product');

const sampleProducts = [
  {
    name: 'Wireless Noise-Cancelling Headphones',
    price: 20999,
    category: 'Audio',
    description: 'Premium over-ear headphones with 30-hour battery life and active noise cancellation.',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop',
    inStock: true,
  },
  {
    name: 'Mechanical Gaming Keyboard',
    price: 10999,
    category: 'Accessories',
    description: 'RGB backlit mechanical keyboard with tactile switches for fast, precise typing.',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600&h=400&fit=crop',
    inStock: true,
  },
  {
    name: '4K Ultra HD Monitor 27"',
    price: 32999,
    category: 'Monitors',
    description: 'Crystal-clear 4K display with HDR support, perfect for work and gaming.',
    image: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=600&h=400&fit=crop',
    inStock: true,
  },
  {
    name: 'Portable SSD 1TB',
    price: 7499,
    category: 'Storage',
    description: 'Lightning-fast external SSD with USB-C connectivity and compact design.',
    image: 'https://images.unsplash.com/photo-1739742473151-d73df9c2a7b9?w=600&h=400&fit=crop',
    inStock: false,
  },
  {
    name: 'Smart Fitness Watch',
    price: 16999,
    category: 'Wearables',
    description: 'Track health metrics, receive notifications, and enjoy 7-day battery life.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop',
    inStock: true,
  },
  {
    name: 'USB-C Hub 7-in-1',
    price: 4499,
    category: 'Accessories',
    description: 'Expand your laptop with HDMI, USB 3.0, SD card reader, and power delivery.',
    image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=600&h=400&fit=crop',
    inStock: true,
  },
];

async function seedProducts() {
  const count = await Product.countDocuments();
  if (count === 0) {
    await Product.insertMany(sampleProducts);
    console.log('Sample products seeded');
  }
}

module.exports = seedProducts;
