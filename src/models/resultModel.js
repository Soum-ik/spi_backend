import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ResultSchema = new Schema({
  result: [
    {
      type: String,
      required: true,
    },
  ],
  passed: {
    type: Boolean,
    required: true,
  },
});

const DataSchema = new Schema({
  results: {
    type: Map,
    of: ResultSchema,
  },
});

const result = mongoose.model("result", DataSchema);

export default result;
