import Notic from "../models/noticModel.js";

export const get = async (req, res) => {
  try {
    const result = await Notic.find();
    return res.json({ message: "Notic get successfully", data: result });
  } catch (error) {
    return res.json({ error: error.message || "Internal Server Error" });
  }
};
export const create = async (req, res) => {
  try {
    const reqBody = await req.body;
    const result = await Notic.create(reqBody);
    return res.json({ message: "Notic created successfully", data: result });
  } catch (error) {
    return res.json({ error: error.message || "Internal Server Error" });
  }
};
export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Notic.findByIdAndDelete(id);
    return res.json({ message: "Notic delete successfully", data: result });
  } catch (error) {
    return res.json({ error: error.message || "Internal Server Error" });
  }
};
export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = await req.body;
    const result = await Notic.findByIdAndUpdate({ _id: id }, updateData, {
      new: true,
    });
    return res.json({ message: "Notic updated successfully", data: result });
  } catch (error) {
    return res.json({ error: error.message || "Internal Server Error" });
  }
};
export const singleData = async (req, res) => {
  try {
    const { name } = req.params;

    const result = await Notic.findOne({ notic_name: name });
    return res.json({ message: "Notic find  successfully", data: result });
  } catch (error) {
    return res.json({ error: error.message || "Internal Server Error" });
  }
};
