import event from "../models/eventModel.js";

export const get = async (req, res) => {
  try {
    const result = await event.find();
    return res.json({ message: "event get successfully", data: result });
  } catch (error) {
    return res.json({ error: error.message || "Internal Server Error" });
  }
};
export const create = async (req, res) => {
  try {
    const reqBody = await req.body;
    const result = await event.create(reqBody);
    return res.json({ message: "event created successfully", data: result });
  } catch (error) {
    return res.json({ error: error.message || "Internal Server Error" });
  }
};
export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await event.findByIdAndDelete(id);
    return res.json({ message: "event delete successfully", data: result });
  } catch (error) {
    return res.json({ error: error.message || "Internal Server Error" });
  }
};
export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = await req.body;
    const result = await event.findByIdAndUpdate({ _id: id }, updateData, {
      new: true,
    });
    return res.json({ message: "event updated successfully", data: result });
  } catch (error) {
    return res.json({ error: error.message || "Internal Server Error" });
  }
};
export const singleData = async (req, res) => {
  try {
    const { name } = req.params;

    const result = await event.findOne({ event_name: name });
    return res.json({ message: "event find  successfully", data: result });
  } catch (error) {
    return res.json({ error: error.message || "Internal Server Error" });
  }
};
