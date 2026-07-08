import express from "express"
import app from "./src/app.js"
let port=process.env.PORT || 5000;
app.listen(port,()=>{
  console.log(`server is sunning on ${port}`)
})
