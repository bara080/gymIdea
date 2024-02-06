// TODO: Import all required components
const path = require("path");

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT;
const connectDB = require("./config/db");

// CALL THE FUNCTION
connectDB();

const app = express();

// Static folder
app.use(express.static(path.join(__dirname, "public")));

// Body parse middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS middleware
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:8000"],
    credentials: true,
  })
);

const ideasRouter = require("./routes/ideas.js");

// Use middleware
app.use("/api/ideas", ideasRouter);

app.get("/", (req, res) => {
  res.send({ message: "Welcome to the gymTips API" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
