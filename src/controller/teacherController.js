import Teacher from "../models/teacherModel.js";

export const get = async (req, res) => {
  try {
    const result = await Teacher.find();
    return res.json({ message: "Item get successfully", data: result });
  } catch (error) {
    return res.json({ error: error.message || "Internal Server Error" });
  }
};
export const create = async (req, res) => {
  try {
    const reqBody = await req.body;

    const result = await Teacher.create(reqBody);
    return res.json({ message: "Item created successfully", data: result });
  } catch (error) {
    return res.json({ error: error.message || "Internal Server Error" });
  }
};
export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Teacher.findByIdAndDelete(id);
    return res.json({ message: "Item delete successfully", data: result });
  } catch (error) {
    return res.json({ error: error.message || "Internal Server Error" });
  }
};
export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = await req.body;
    const result = await Teacher.findByIdAndUpdate({ _id: id }, updateData, {
      new: true,
    });
    return res.json({ message: "Item updated successfully", data: result });
  } catch (error) {
    return res.json({ error: error.message || "Internal Server Error" });
  }
};
