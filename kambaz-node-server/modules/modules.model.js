import mongoose from "../connection.js";

const modulesSchema = new mongoose.Schema({
  _id: String,
  name: String,
  course: String,
  description: String,
});

export default mongoose.model("modules", modulesSchema);
