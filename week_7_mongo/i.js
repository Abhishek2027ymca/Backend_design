// -------------------- IMPORTS --------------------
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const { UserModel, TodoModel } = require("./db");
const { z } = require("zod");

const app = express();

// -------------------- CONSTANTS --------------------

// Secret key used to sign & verify JWT tokens
const JWT_SECRET = "ADE!@EX$&%FGHI(7)*HIKL";

// -------------------- DB CONNECTION --------------------

// Connect backend to MongoDB Atlas
mongoose.connect(
  "mongodb+srv://admin:rr8prOazvrC6Tzi1@cluster0.byjr6ke.mongodb.net/todoapp"
);

// -------------------- MIDDLEWARE --------------------

// Converts JSON request body into JS object (req.body)
app.use(express.json());


app.post("/signup", async function (req, res) {

  // Zod schema → ONLY RULES, NOT DATA
  const requiredSchema = z.object({
    email: z.string().max(100).email(),
    password: z.string().min(5),
    name: z.string().min(2)
  });

  // Validate EXISTING req.body data
  const parseData = requiredSchema.safeParse(req.body);

  // If validation fails → stop execution
  if (!parseData.success) {
    res.json({
      message: "incorrect format",
      error: parseData.error.errors
    });
    return;
  }

  // Extract actual request data
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  try {
    // ---------- BUG FIX ----------
    // Check if user already exists BEFORE creating
    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      res.json({
        message: "user already exist"
      });
      return;
    }

    // Hash the password before storing
    // 5 = salt rounds (hash complexity)
    const hashedpassword = await bcrypt.hash(password, 5);

    // Store user in DB
    await UserModel.create({
      email: email,
      password: hashedpassword, // hashed password
      name: name,
    });

    // Send success response ONCE
    res.json({
      message: "user created successfully"
    });

  } catch (e) {
    // Handles unexpected DB / server errors
    res.status(500).json({
      message: "server error"
    });
  }
});


// -------------------- SIGNIN ROUTE --------------------
app.post("/signin", async function (req, res) {

  const email = req.body.email;
  const password = req.body.password;

  // Find user by email
  const user = await UserModel.findOne({ email });

  // If user does not exist → stop
  if (!user) {
    res.status(403).json({
      message: "user does not exist in db"
    });
    return;
  }
   
  // ---------- BUG FIX ----------
  // bcrypt.compare is ASYNC → must await
  const passwordmatch = await bcrypt.compare(password, user.password);

  if (passwordmatch) {
    // Create JWT token containing user id
    const token = jwt.sign(
      { id: user._id.toString() },
      JWT_SECRET
    );

    res.json({
      token: token
    });

  } else {
    res.status(403).json({
      message: "invalid credentials"
    });
  }
});


// ==================================================
// ================= AUTH MIDDLEWARE =================
// ==================================================

function auth(req, res, next) {

  // Token is expected in request headers
  const token = req.headers.token;

  // ---------- BUG FIX ----------
  // Handle missing token
  if (!token) {
    res.status(401).json({
      msg: "token missing"
    });
    return;
  }

  try {
    // ---------- BUG FIX ----------
    // jwt.verify can throw error → wrap in try/catch
    const decodedData = jwt.verify(token, JWT_SECRET);

    // Attach userId to request object
    req.userId = decodedData.id;

    // Move to next middleware / route
    next();

  } catch (e) {
    res.status(403).json({
      msg: "incorrect data"
    });
  }
}


// ==================================================
// ================= PROTECTED ROUTES ================
// ==================================================

// Create todo (only logged-in users)
app.post("/todo", auth, function (req, res) {

  // userId comes from auth middleware
  const userId = req.userId;

  res.json({
    userid: userId
  });
});

// Fetch todos (only logged-in users)
app.get("/todos", auth, function (req, res) {

  const userId = req.userId;

  res.json({
    userid: userId
  });
});


// -------------------- SERVER --------------------

app.listen(3000, function () {
  console.log("Server running on port 3000");
});
