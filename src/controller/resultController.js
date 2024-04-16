import Result from "../models/resultModel.js";

export const get = async (req, res) => {
  try {
    const results = await Result.find();
    return res.json({ message: "Items retrieved successfully", data: results });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message || "Internal Server Error" });
  }
};
