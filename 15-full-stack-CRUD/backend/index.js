import express from "express"
import cors from "cors"
import dotenv from "dotenv";



import productRoutes from "./routes/products.routes.js"
import connectDB from "./database/database.js"

dotenv.config();


const app = express()

// connecting to MonggoDB Cluster
connectDB()

// CORS FIX
app.use(cors({
    origin: "http://localhost:5173",   // your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));

// Optional: Allow all origins (temporary, not recommended for production)
// app.use(cors());


// Middleware
app.use(express.json())
app.use("/api", productRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port 8000`);
})