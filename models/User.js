import mongoose from "mongoose";
import Image from "./Image.js";

const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  password: String,
  pins: [Image.schema],
});

const User = new mongoose.model("user", userSchema);

export default User;
