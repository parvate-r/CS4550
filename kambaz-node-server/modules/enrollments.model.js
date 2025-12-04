import mongoose from "../connection.js";

const enrollmentsSchema = new mongoose.Schema({
  _id: String,
  user: String,
  course: String,
});

export default mongoose.model("enrollments", enrollmentsSchema);
