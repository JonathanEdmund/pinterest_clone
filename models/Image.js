import mongoose from "mongoose";

const { Schema } = mongoose;

const imageSchema = new Schema({
  title: String,
  description: String,
  link: String,
});

const Image = new mongoose.model("image", imageSchema);

export default Image;
