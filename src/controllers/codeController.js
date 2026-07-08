import { execute } from "../services/pistonService.js";
export const runCode=async (req,res)=>{
    try {
      let {language,code,stdin}=req.body;
      let result=await execute(language,code,stdin);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({
        success:false,
        message:error.message
      })
    }
};