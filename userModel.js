const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: Number, required: true }
});

// 👇 Collection Name = userdataLogin
module.exports = mongoose.model("userdataLogin", userSchema);
