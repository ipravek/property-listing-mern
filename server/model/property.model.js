const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    name: String,
    image: String,
    location: String,
    isActive: { default: true, type: Boolean },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Property", propertySchema);
