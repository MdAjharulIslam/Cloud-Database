import dotenv from "dotenv"
dotenv.config()
import express from "express"
import connectDB from "./config/db.js";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";


const app = express();

const PORT  = process.env.PORT || 3000;
await connectDB()

app.use(express.json())
app.use(express.urlencoded())

app.get('/',(req, res)=>{
    res.json("server is working")
})

app.use('/api/user',userRoute)
app.use('/api/product',productRoute)

app.listen(PORT, ()=>{
    console.log(`the server is running on port ${PORT}`)
})