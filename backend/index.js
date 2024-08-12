import express from "express"
import db from "./db.js"
import dotenv from "dotenv/config"
import cors from "cors"
import authRoutes from "./routes/auth.route.js"
import cookieParser from "cookie-parser"
const app = express()


app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use("/api/auth",authRoutes)

app.listen(5000,()=>{
    db()
    console.log("5k")
    console.log(Math.floor(100000 + Math.random() * 900000).toString())
})