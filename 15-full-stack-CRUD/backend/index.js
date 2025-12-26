import express from "express"
import cors from "cors"
import dotenv from "dotenv";
import { v2 as cloudinary } from 'cloudinary';

import productRoutes from "./routes/products.routes.js"
import connectDB from "./database/database.js"

dotenv.config();

// cloudinary config
// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});


const app = express()

// connecting to MonggoDB Cluster
connectDB()

// CORS FIX
// app.use(cors({
//     origin: "http://localhost:5173",   // your frontend URL
//     methods: ["GET", "POST", "PUT", "DELETE"],
//     credentials: true
// }));

// Only for local npm run preview on vite
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:4173',
]

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (e.g. Postman)
    if (!origin) return callback(null, true)

    if (allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}))


// Optional: Allow all origins (temporary, not recommended for production)
// app.use(cors());


// Middleware
// app.use(express.json())
app.use(express.json({ limit: "10mb" }));
// app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use("/api", productRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port 8000`);
})