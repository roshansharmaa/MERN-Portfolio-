import mongoose from "mongoose";

const aboutSchema = new mongoose.Schema({
  original: { type: String, required: true },
  about: { type: String, required: true },
});

const About = mongoose.model("About", aboutSchema);
export default About;
