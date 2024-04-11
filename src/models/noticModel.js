import mongoose from "mongoose";

const noticSchema = new mongoose.Schema({
  notic_name: { type: String, required: true },
  details: { type: String, required: true },
  date: { type: String, required: true },
});

const notic = mongoose.model("notic", noticSchema);

export default notic;
