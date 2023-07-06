const mongoose = require("mongoose");

export const dbConnect = mongoose
  .connect("mongodb+srv://mohini:mohinimohini@cluster0.sqdke.mongodb.net/test")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));
