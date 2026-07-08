import { execute } from "../services/pistonService.js";
import { CodeSchema } from "../validators/reqValidator.js";

export const runCode=async (req,res)=>{
    try {
      // let check=CodeSchema.parse(req.body)
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