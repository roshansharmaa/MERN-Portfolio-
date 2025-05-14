import mongoose from "mongoose";
const passwordschema = new mongoose.Schema(
  {
    original: { type: String, required: true },
    pass: { type: String, required: true },
  },
  { timestamps: true }
);
const Password = mongoose.model("Password", passwordschema);
export default Password;
