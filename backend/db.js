const mongoose = require("mongoose");
const connectToDB = async (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Server is connected to mongoDB Atlas");
    await mongoose.connect(process.env.MONGO_URI);
  }
};
module.exports = connectToDB;
