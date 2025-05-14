import express from "express";
import dotenv from "dotenv";
import mongoConnect from "./db/connect.js";
import Home from "./db/Home.model.js";
import About from "./db/about.model.js";
import Skill from "./db/skill.model.js";
import Project from "./db/projects.model.js";
import cors from "cors";
import Password from "./db/password.model.js";
const app = express();

const port = 5000;
app.use(
  cors({
    origin: ["https://mern-portfolio-roshan.netlify.app"],
    methods: [post, get, put],
    credentials: true,
  })
);

app.use(express.json());

dotenv.config();

app.get("/", (req, res) => {
  res.send({ hi: "Backend is running" });
});

app.put("/home", async (req, res) => {
  try {
    const { lineone, name, role, profileurl, decription, cvurl } = req.body;
    const original = "true";

    const finding = await Home.findOneAndUpdate(
      { original },
      { lineone, name, role, profileurl, decription, original, cvurl },
      { new: true, upsert: true }
    );

    return res.status(201).send(finding);
  } catch (error) {
    console.error("Error creating home:", error);
    res.status(500).send({ message: "Something went wrong." });
  }
});
app.get("/home", async (req, res) => {
  try {
    const findall = await Home.find({});

    res.send({ findall, error: false });
  } catch (err) {
    res.send({ err: err, error: false });
  }
});

app.put("/about", async (req, res) => {
  const { about } = req.body;
  const original = "true";
  if (!about) {
    res.send({ message: "All fields are requird", error: true });
  }
  try {
    const finding = await About.findOneAndUpdate(
      { original },
      { about },
      { new: true, upsert: true }
    );
    res.send({ finding, error: false });
  } catch (error) {
    console.error("Error creating home:", error);
    res.status(500).send({ message: "Something went wrong." });
  }
});
app.get("/about", async (req, res) => {
  try {
    const findall = await About.find({});

    res.send({ findall, error: false });
  } catch (err) {
    res.send({ err: err, error: true });
  }
});

app.put("/updatepass", async (req, res) => {
  const { confpass, password } = req.body;
  if (!(confpass || password)) {
    res.send({ message: "All fields are requird", error: true });
  }
  const original = "true";
  if (!(confpass == password)) {
    res.send({ message: "Passwod Dos't match", error: true });
  }
  try {
    const finding = await Password.findOneAndUpdate(
      { original },
      { pass: password },
      { new: true, upsert: true }
    );
    res.send({ finding, error: false, hi: "hii" });
  } catch (error) {
    console.error("Error updating password:", error);
    res.status(500).send({ message: "Something went wrong." });
  }
});

app.get("/verify", async (req, res) => {
  try {
    const finding = await Password.find({});

    res.send({ finding, error: false, pass: finding[0].pass });
  } catch (error) {
    console.error("Error updating password:", error);
    res.status(500).send({ message: "Something went wrong." });
  }
});

app.post("/skill", async (req, res) => {
  const { skill, percent } = req.body;
  if (!(skill || percent)) {
    res.send({ message: "All filds are requird", error: true });
  }
  try {
    const finding = await Skill.create({ percent, skill });
    res.send({ finding, error: false });
  } catch (error) {
    console.log(err);
    res.send({ message: err, error: true });
  }
});

app.get("/skill", async (req, res) => {
  try {
    const findall = await Skill.find({});

    res.send({ findall, error: false });
  } catch (err) {
    res.send({ err: err, error: false });
  }
});

app.post("/projects", async (req, res) => {
  const { imageurl, prjname, prjdec, liveurl, giturl } = req.body;
  if (!(prjname || prjdec || liveurl || giturl)) {
    res.send({ message: "All filds are requird", error: true });
  }
  try {
    const finding = await Project.create({
      imageurl,
      prjname,
      prjdec,
      liveurl,
      giturl,
    });
    res.send({ finding, error: false });
  } catch (error) {
    console.log(err);
    res.send({ message: err, error: true });
  }
});

app.get("/projects", async (req, res) => {
  try {
    const findall = await Project.find({});

    res.send({ findall, error: false });
  } catch (err) {
    res.send({ err: err, error: false });
  }
});

app.listen(port, () => {
  console.log("Server is running " + port);
  mongoConnect();
});
