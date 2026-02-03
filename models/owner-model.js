const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1/27017/Scatch");

const ownerSchema = new mongoose.Schema({
  fullname: {
    type: String,
    minLength: 3,
    maxLength: 50,
    required: true,
    trim: true,
  },
  email: String,
  password: String,
  products: [],
  picture: String,
  gstin: String,
});

module.exports = mongoose.model("owner", ownerSchema);
