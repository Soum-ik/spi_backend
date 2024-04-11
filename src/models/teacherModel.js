import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    department: { type: String, required: true },
    fatherName: { type: String, required: true },
    motherName: { type: String, required: true },
    gender: { type: String, required: true },
    address: { type: String, required: true },
    image: { type: String, required: true },
    shortDesc: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

const Teacher = mongoose.model("Teacher", teacherSchema);
export default Teacher;
