// const mongoose = require("mongoose");
import mongoose from "mongoose";

const homeschema = new mongoose.Schema(
  {
    original: { type: String, required: true },
    lineone: { type: String, required: true },
    name: { type: String },
    role: { type: String },
    profileurl: { type: String },
    cvurl: { type: String },
    decription: { type: String },
  },
  { timestamps: true }
);

const Home = mongoose.model("Home", homeschema);
export default Home;
