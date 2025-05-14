import mongoose from "mongoose";

const projectschema = new mongoose.Schema(
  {
    imageurl: { type: String, required: true },
    prjname: { type: String, required: true },
    prjdec: { type: String, required: true },
    liveurl: { type: String, required: true },
    giturl: { type: String, required: true },
  },
  { timestamps: true }
);

const Project = mongoose.model("Project", projectschema);
export default Project;
