import event from "../models/eventModel";

export const store = async (req, res) => {
  try {
    const { reqBody } = req.body;
    await todos.create({ name, description });
    return res.json({ message: "Item created successfully" });
  } catch (error) {
    return res.json({ error: error.message || "Internal Server Error" });
  }
};
