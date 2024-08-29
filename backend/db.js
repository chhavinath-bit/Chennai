const mongoose= require('mongoose')
const connectToDB = async (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Server is connected to mongoDB Atlas");
      await mongoose.connect("mongodb://127.0.0.1:27017/jobs");
    }
  };
  module.exports = connectToDB;