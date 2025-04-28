const express = require("express");
const cors = require("cors");
const User = require("./models/user.js");
const app = express();

const mongoose = require("mongoose");

app.use(cors());
app.use(express.json());

await mongoose.connect(
  "mongodb+srv://naveenchamara:Cn1WYRK2D12oWyX4@blog-mern-cluster.kykxhhj.mongodb.net/?retryWrites=true&w=majority&appName=blog-mern-cluster"
);

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  await User.create({ username, password });

  res.json({ requestData: { username, password } });
});

app.listen(4000);

// mongodb+srv://naveenchamara:Cn1WYRK2D12oWyX4@blog-mern-cluster.kykxhhj.mongodb.net/?retryWrites=true&w=majority&appName=blog-mern-cluster
