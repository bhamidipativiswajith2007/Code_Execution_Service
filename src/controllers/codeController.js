import { execute } from "../services/pistonService.js";
import { successResponse,errorResponse } from "../utils/response.js";

export const runCode=async(req,res)=>{
    try {
      // let check=CodeSchema.parse(req.body)
      let {language,code,stdin}=req.validatedData;
      let result=await execute(language,code,stdin);
       return res.status(200).json(successResponse(result, "Code executed successfully"));
    } catch (error) {
       return res.status(500).json(errorResponse(error.message));

    }
};