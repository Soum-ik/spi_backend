import User from "../models/userModel.js";

export const post = async (req, res) => {
  try {
    let reqBody = await req.body;
    console.log(reqBody, "reqBody");
    const status = false;
    reqBody.access = status;
    const result = await User.create(reqBody);
    return res.json({ message: "Items retrieved successfully", data: result });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message || "Internal Server Error" });
  }
};

export const get = async (req, res) => {
  const reqBody = await req.body;
  const { email, pass } = await reqBody;
  try {
    const result = await User.findOne({
      email: email,
      pass: pass,
    });
    return res.json({ message: "Items retrieved successfully", data: result });
  } catch (error) {
    return res
      .status(500)
      .json({ error: error.message || "Internal Server Error" });
  }
};
