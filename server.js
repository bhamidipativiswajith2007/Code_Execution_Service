import express from "express"
import dotenv from "dotenv"
dotenv.config();
import app from "./src/app.js"
let port=process.env.PORT || 3000;
app.listen(port,()=>{
  console.log(`server is sunning on ${port}`)
})
