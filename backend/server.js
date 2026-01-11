import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Add routes below
app.use("/api/auth", require("./routes/authRoutes.js"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running ${PORT}`));
