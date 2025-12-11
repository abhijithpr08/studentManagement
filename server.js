import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import studentRoutes from "./routes/studentRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

//middlewaere
app.use(cors())
app.use(express.json());
app.use(express.static("public"));

//routes
app.use("/api/students", studentRoutes);

//db connection
connectDB();

//start server
const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}/`)
})