const { Schema, model } = require("mongoose");

const UserCart = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: {
    type: Number,
    required: true,
  },
});
module.exports = model("UserCart", UserCart);
