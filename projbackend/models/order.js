const mongoose = require("mongoose");

const { ObjectId } = mongoose.Schema;

const ProductCartSchema = new mongoose.Schema({
  product: {
    type: ObjectId,
    ref: "Product",
  },
  name: String,
  count: Number,
  price: Number,
});

const orderSchema = new mongoose.Schema(
  {
    products: [ProductCartSchema],
    transaction_id: {
      type: String,
    },
    amount: {
      type: Number,
    },
    address: String,
    updated: Date,
    user: {
      type: ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true }
);

//module.exports = mongoose.model("Order", orderSchema);
const ProductCart = mongoose.model("ProductCart", ProductCartSchema);
const Order = mongoose.model("Order", orderSchema);

module.exports = { Order, ProductCart };
