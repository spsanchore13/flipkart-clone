const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productId: { type: Number, required: true },
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, required: true },
  reviews: { type: Number, required: true },
  rating: { type: Number, required: true },
  colors: [{ type: String }],
  sizes: [{ type: String }],
  images: [{ type: String }],
  availability: { type: Boolean, required: true },
  seller: [
    {
      name: { type: String, required: true },
      rating: { type: Number, required: true },
      location: { type: String, required: true },
    },
  ],
  features: [
    {
      feature: { type: String, required: true },
    },
  ],
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

module.exports = Product;
