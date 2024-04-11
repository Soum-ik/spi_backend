import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import routes from "./routes/api.js";
import {MONGODB_CONNECTION} from '../src/config/config.js'
const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose
  .connect(MONGODB_CONNECTION, { autoIndex: true })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

// api route
app.use("/api", routes);
// start up basic route
app.get("/", async (req, res) => {
  res.send("Welcome to the backend of SPI");
});

app.listen(port, () => {
  console.log("Listening to port:", port);
});
