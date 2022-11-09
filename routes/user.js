"use strict";

import express from "express";
import bcrypt from "bcrypt";

// db
import User from "../models/User.js";
import Image from "../models/Image.js";

const router = express.Router();

router.route("/register").post(async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!(username || password)) {
      throw new Error("Incomplete registration form!");
    }

    // encrypt password with bcrypt
    const hashedPassword = await bcrypt.hash(
      password,
      Number(process.env.SALT)
    );

    const newUser = new User({
      username: username,
      password: hashedPassword,
      pins: [],
    });

    await newUser.save();

    res.json({
      status: true,
      message: "Successfully registered a new user!",
    });
  } catch (error) {
    res.json({ status: false, message: error.message });
  }
});

router.route("/login").post(async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!(username || password)) throw new Error("Incomplete login form!");

    const user = await User.findOne({ username: username });

    if (!user) {
      throw new Error("User not found!");
    }

    // add bcrypt verification later
    const hash = await user.password;
    const result = await bcrypt.compare(password, hash);
    console.log(result);
    if (!result) {
      throw new Error("Incorrect password!");
    }

    res.json({ status: true, message: "Successfully logged in!" });
  } catch (error) {
    res.json({ status: false, message: error.message });
  }
});

router.route("/pin").post(async (req, res) => {
  try {
    const { pinId, userId } = req.body;

    const pin = await Image.findById(pinId);
    if (!pin) throw new Error("Pin not found!");

    // const user = await User.findById(userId);
    const user = await User.findByIdAndUpdate(userId, { $push: { pins: pin } });
    if (!user) throw new Error("User not found!");

    res.json({ status: true, message: "Successfully pinned!" });
  } catch (error) {
    res.json({ status: false, message: error.message });
  }
});

export default router;
