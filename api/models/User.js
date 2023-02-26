const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    phone:{
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("User", UserSchema);
