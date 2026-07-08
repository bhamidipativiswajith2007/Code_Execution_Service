import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import codeRoutes from "./routes/codeRoute.js";
let app=express()
//middlewares
app.use(cors())//we know right
app.use(morgan('dev'))//reuest logging
app.use(helmet())//secured headers like Xframe
app.use(express.json())//parsing the json files inti JS objectsss

//routes
app.use("/api/v1",codeRoutes);

app.get("/",(req,res)=>{
    res.json({
        success:true,
        message:"Code_Execution Service is Running"
    })
})

export default app