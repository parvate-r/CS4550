import mongoose from "mongoose";

const CONNECTION_STRING =
  "mongodb+srv://kambaz:kambaz123@cluster0.vgmnmog.mongodb.net/kambaz?appName=Cluster0";


mongoose.connect(CONNECTION_STRING);

const db = mongoose.connection;

db.on("error", (err) => {
  console.error("MongoDB connection error:", err);
});

db.once("open", () => {
  console.log("Connected to MongoDB");
});

export default mongoose;
