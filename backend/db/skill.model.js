import mongoose from "mongoose";

const skillSchema = new mongoose.Schema(
  {
    skill: { type: String },
    percent: { type: Number },
  },
  { timestamps: true }
);

const Skill = mongoose.model("Skill", skillSchema);
export default Skill;
