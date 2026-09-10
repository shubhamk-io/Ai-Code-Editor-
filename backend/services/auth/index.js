import express from "express"
import dotenv from 'dotenv'
import { connectDb } from "./config/db.js";


dotenv.config();
const port = process.env.PORT || 8001


const app = express()

//----------ROUTES---------
app.get("/api/auth",(req,res)=>{
    res.json({"Message":"Hello from Auth services"})
});

app.listen(port,()=>{
    connectDb()
    console.log(`Auth services started at ${port}`)
})