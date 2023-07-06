const { Schema, model } = require("mongoose");

const UserOrders = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  orders: {
    type: Number,
    required: true,
  },
});
module.exports = model("UserOrders", UserOrders);
