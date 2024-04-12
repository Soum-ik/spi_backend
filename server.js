import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import routes from "./src/routes/api.js";
import rateLimit from "express-rate-limit";
const app = express();
import {
  MONGODB_CONNECTION,
  PORT,
  MAX_JSON_SIZE,
  URL_ENCODED,
  REQUEST_LIMIT_NUMBER,
  REQUEST_LIMIT_TIME,
} from "./src/config/config.js";

// port
const port = PORT || 5000;

// middlware
app.use(cors());
app.use(helmet());
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_ENCODED }));
const limiter = rateLimit({
  windowMs: REQUEST_LIMIT_TIME,
  max: REQUEST_LIMIT_NUMBER,
});
app.use(limiter);

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

//
app.listen(port, () => {
  console.log("Listening to port:", port);
});
