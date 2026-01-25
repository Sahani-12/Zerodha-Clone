require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcryptjs");

const { HoldingsModel } = require("./model/HoldingsModel");
const PositionsModel = require("./model/PositionsModel");
const OrdersModel = require("./model/OrdersModel");
const { UserModel } = require("./model/UserModel");
const jwt = require("jsonwebtoken");
const secret = process.env.JWT_SECRET || "mysecretkey";

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

// Middleware Setup
app.use(
  cors({
    origin: [
      "https://zerodha-clone-v96i.vercel.app",
      "https://zerodha-clone-delta-five.vercel.app",
      "https://zerodha-clone-delta-five.vercel.app", // Link 1
      "https://zerodha-clone-v96i.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(bodyParser.json());
app.use(cookieParser()); // Cookie parser middleware

// 1. Signup Route
app.post("/signup", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // Check if user already exists
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.json({ message: "User already exists", success: false });
    }

    const user = await UserModel.create({ email, username, password });

    res
      .status(201)
      .json({ message: "User signed in successfully", success: true, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
});

// Login Route
// Login Route Update
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.json({ message: "All fields are required", success: false });
    }
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.json({
        message: "Incorrect password or email",
        success: false,
      });
    }
    const auth = await bcrypt.compare(password, user.password);
    if (!auth) {
      return res.json({
        message: "Incorrect password or email",
        success: false,
      });
    }

    // TOKEN GENERATION
    const token = jwt.sign({ id: user._id, username: user.username }, secret, {
      expiresIn: "3d",
    });

    // Set Cookie
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
    });

    res.status(201).json({
      message: "User logged in successfully",
      success: true,
      username: user.username,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error", success: false });
  }
});

// User Detail Route (New)
app.get("/user", (req, res) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ status: false });
  }
  jwt.verify(token, secret, async (err, data) => {
    if (err) {
      return res.json({ status: false });
    } else {
      const user = await UserModel.findById(data.id);
      if (user) return res.json({ status: true, username: user.username });
      else return res.json({ status: false });
    }
  });
});

app.post("/logout", (req, res) => {
  // Token wali cookie delete karein
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0),
    secure: true,
    sameSite: "none",
    
  });

  res
    .status(200)
    .json({ success: true, message: "User logged out successfully" });
});

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();
  res.send("Order Saved");
});

app.get("/allOrders", async (req, res) => {
  try {
    const orders = await OrdersModel.find({});
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`App Started on port ${PORT}`);
  mongoose.connect(uri);
  console.log("DB connected");
});
