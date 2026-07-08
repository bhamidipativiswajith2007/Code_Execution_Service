import axios from "axios"
import dotenv from "dotenv"
dotenv.config();

let PISTON_URL=process.env.PISTON_URL
export let execute=async(language,code,stdin="")=>{
  try {
    let res=await axios.post(`${PISTON_URL}/api/v2/execute`,
      {
        language:language,
        version: "*",
        files: [
          {
            content:code
          }
        ],
        stdin
      }
    )
    return res.data;
  } catch (error) {
    throw new Error(error.response?.data?.message||"Failed to execute code");
  }
}