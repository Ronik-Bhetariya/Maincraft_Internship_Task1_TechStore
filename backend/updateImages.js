require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./models/Product');

const imageUpdates = [
  [
    '4K Ultra HD Monitor 27"',
    'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=600&h=400&fit=crop',
  ],
  [
    'Portable SSD 1TB',
    'https://images.unsplash.com/photo-1739742473151-d73df9c2a7b9?w=600&h=400&fit=crop',
  ],
];

mongoose
  .connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/techstore')
  .then(async () => {
    for (const [name, image] of imageUpdates) {
      await Product.updateOne({ name }, { image });
    }
    console.log('Monitor and SSD product images updated');
    process.exit(0);
  })
  .catch((error) => {
    console.error(error.message);
    process.exit(1);
  });
