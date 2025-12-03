import express from "express"

import productRoutes from "./routes/products.routes.js"
import connectDB from "./database/database.js"

const app = express()

// connecting to MonggoDB Cluster
connectDB()

// Middleware
app.use("/api",productRoutes)

app.listen(8000,()=>{
    console.log(`Server is running on port 8000`);
})