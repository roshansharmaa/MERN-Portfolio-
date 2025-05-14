import mongoose from "mongoose";

const mongoConnect = () => {
  mongoose
    .connect(process.env.MONGO_URL, {})
    .then(() => console.log("Connected to MongoDB"))
    .catch((err) => console.error("Connection error:", err));
};

export default mongoConnect;
