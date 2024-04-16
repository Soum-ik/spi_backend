import express from "express";
import cors from "cors";
import helmet from "helmet";
import { mongoose } from "mongoose";
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

    // Accessing MongoDB resultCollection after the connection is established
    const resultCollection = mongoose.connection.db.collection("result");

    // Assuming 'identifier' is the identifier you want to search for
    app.get("/api/result/:identifier", async (req, res) => {
      const identifier = req.params.identifier;

      try {
        const result = await resultCollection.findOne({
          [identifier]: { $exists: true },
        });

        if (result) {
          res.status(200).json(result[identifier]);
        } else {
          res.status(404).json({ error: "Result not found" });
        }
      } catch (error) {
        console.error("Error fetching result:", error);
        res.status(500).json({ error: "Internal server error" });
      }
    });

    // API routes
    app.use("/api", routes);
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

// start up basic route
app.get("/", async (req, res) => {
  res.send("Welcome to the backend of SPI");
});

// listing port
app.listen(port, () => {
  console.log(`http://localhost:${port}`, port);
});
