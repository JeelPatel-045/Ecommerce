const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  sku: { type: String, required: true, unique: true },
  product_name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
