import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import authRoute from "./route/auth.js";

const app = express();
dotenv.config();

// Constants
const PORT = process.env.PORT || 3002;
const DB_PASS = process.env.DB_PASS;

// Middleware
app.use(cors());
app.use(express.json());

//routes
//example =>>> app.get(route, controller === () => {});
app.use("/api/auth", authRoute);

async function start() {
  try {
    await mongoose.connect(
      `mongodb+srv://meteo:${DB_PASS}@cluster0.9jq69.mongodb.net/meteo?retryWrites=true&w=majority`
    );

    app.listen(PORT, () => console.log("Server started"));
  } catch (error) {
    console.log(error);
  }
}

start();
