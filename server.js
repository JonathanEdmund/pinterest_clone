"use strict";

import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import mongoose from "mongoose";

import post from "./routes/post.js";
import user from "./routes/user.js";
// import path from "path";
// import { fileURLToPath } from "url";
// import { dirname } from "path";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

const app = express();
app.use(express.json());

//route
app.use("/api/post", post);
app.use("/api/user", user);

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URI);
}

app.get("/", (req, res) => {
  res.json("hello");
});

app.listen(process.env.PORT || 3001, function () {
  console.log("Server started at port 3001");
});
