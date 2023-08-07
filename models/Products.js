const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  storage: {
    type: Number,
    required: true
  }
},{
  timestamps: true
});
module.exports = mongoose.model("products", ProductSchema);
