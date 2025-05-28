const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const bodyParser = require("body-parser");

const socialMediaRoutes = require("./routes/socialmedia");

require('dotenv').config();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/socialMediaHub";
const app = express();
// const PORT = 3000;

app.use(express.static("../public"));

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.use("/api/socialmedia", socialMediaRoutes);

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

  

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
// app.get("/", (req, res) => {
//   res.send("Welcome to Social Media API!");
// });
