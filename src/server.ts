import dns from 'dns';
dns.setServers(['8.8.8.8', '8.8.4.4']);

import express from 'express';
import mongoose from 'mongoose';
import cors from "cors";
import dotenv from "dotenv";
import connectDB from './config/db';
import taskRoutes from "./routes/TaskRoutes"

dotenv.config();

const app = express()

// Middleware
app.use(cors())
app.use(express.json())
 
// connect to mongodb
connectDB()

// Task Routes
app.use("/tasks", taskRoutes)

// Base route
app.get("/", (req, res)=>{
    res.send("Task duty API is running!")
})

// START SERVER
const PORT = process.env.PORT || 8090

app.listen (
    PORT, ()=>{
        console.log(`Server running on port ${PORT}`);
        console.log(`Environment: ${process.env.NODE_ENV}`);   
    });

export default app;