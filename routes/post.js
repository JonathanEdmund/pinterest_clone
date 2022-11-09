"use strict";

import express from "express";

// db
import Image from "../models/Image.js";

const router = express.Router();

router
  .route("/")
  .get(async (req, res) => {
    try {
      const pins = await Image.find();
      res.json({ status: true, pins });
    } catch (error) {
      res.json({ status: false, message: error.message });
    }
  })
  .post(async (req, res) => {
    try {
      const { title, description, link } = req.body;

      const newImage = new Image({
        title,
        description,
        link,
      });

      await newImage.save();

      res.json({
        status: true,
        message: "Successfully added an image!",
        newImage,
      });
    } catch (error) {
      res.json({ status: false, message: error.message });
    }
  });

export default router;
