require("dotenv").config();
const express = require("express");
const connectDB = require("./dbConnection");
const User = require("./userModel");

const app = express();

// Middleware
app.use(express.json());

// Connect DB
connectDB();

// Basic Route
app.get("/", (req, res) => {
  res.send("Server Running with CRUD");
});// only for browser...

// create User
app.post("/create-user", async (req, res) => {
    console.log("create user......");
  try {
    const user = await User.create(req.body);
    res.json({ message: "User created", data: user });
  } catch (error) {
    res.json({ error: error.message });
  }
});
console.log("create user......2");


// //  Read All Users
// app.get("/users", async (req, res) => {
//   const users = await User.find();
//   res.json(users);
// });

// // UPDATE User
// app.put("/update-user/:id", async (req, res) => {
//   const user = await User.findByIdAndUpdate(req.params.id, req.body, {
//     new: true,
//   });
//   res.json(user);
// });

// // DELETE User
// app.delete("/delete-user/:id", async (req, res) => {
//   await User.findByIdAndDelete(req.params.id);
//   res.json({ message: "User deleted" });
// });

// Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`);
});
