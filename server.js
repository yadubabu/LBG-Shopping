const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const UserOrders = require("./models/UserOrders");
const UserCart = require("./models/UserCart");
const RegisterUsers = require("./models/RegisterUsers");

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
  })
);
mongoose
  .connect("mongodb+srv://mohini:mohinimohini@cluster0.sqdke.mongodb.net/test")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

app.get("/", async (req, res) => {
  res.send("Hello World");
});

app.post("/registeruser", async (req, res) => {
  const { name, email, password, confirmpassword, phone, address } = req.body;
  try {
    const newUser = new RegisterUsers({
      name,
      email,
      password,
      confirmpassword,
      phone,
      address,
    });
    const userOrders = new UserOrders({
      email,
      password,
      orders: 0,
    });
    const userCart = new UserCart({
      email,
      password: "1234",
      cart: 0,
    });
    await newUser.save();
    await userOrders.save();
    await userCart.save();
    return res.send("Successfully Registered");
  } catch (err) {
    console.log(err);
  }
});

app.get("/getusers", async (req, res) => {
  res.json(await RegisterUsers.find());
});
app.get("/getcart", async (req, res) => {
  try {
    return res.json(await UserCart.find());
  } catch (err) {
    console.log(err);
  }
});
const port = 5000;

app.listen(port, () => {
  console.log(`Server Running on PortNo ${port}`);
});
