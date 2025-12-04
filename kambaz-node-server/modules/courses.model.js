import mongoose from "../connection.js";

const coursesSchema = new mongoose.Schema({
  _id: String,
  name: String,
  number: String,
  description: String,
});

export default mongoose.model("courses", coursesSchema);
