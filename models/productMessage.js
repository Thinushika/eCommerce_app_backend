import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  id: String,
  sku: String,
  productName: String,
  price: Number,
  qty: String,
  desc: String,
  tags: [String],
  selectedFile: String,
  favorite: {
    type: Number,
    default: 0,
  },
});

const ProductMessage = mongoose.model("ProductMessage", productSchema);

export default ProductMessage;
