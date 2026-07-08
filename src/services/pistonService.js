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
    const {run}=res.data;
    //return res.data;
        return {
        language:res.data.language,
        version:res.data.version,
        stdout:run.stdout,
        stderr:run.stderr,
        exitCode:run.code,
        memory:run.memory,
        cpuTime:run.cpu_time,
        wallTime:run.wall_time
     };
  } catch (error) {
     console.log(error.response?.data);
    console.log(error.message);
    console.log(error);

    throw error;
  }
}