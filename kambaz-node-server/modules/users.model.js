import mongoose from "../connection.js";

const usersSchema = new mongoose.Schema({
  _id: String,
  username: String,
  password: String,
  role: String,
});

export default mongoose.model("users", usersSchema);
