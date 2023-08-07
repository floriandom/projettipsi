const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  products: [
    {
      type: Schema.ObjectId,
      ref: "products", // Référence au modèle Product
    },
  ],
  status: {
    type: String,
    default: "pending",    
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Order", OrderSchema);