import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  event_name: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  thumbnail: { type: String, required: true },
  detail: { type: String, required: true },
});

const event = mongoose.model("event", eventSchema);
export default event;
