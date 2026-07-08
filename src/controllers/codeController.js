export const runCode=async (req,res)=>{
    res.status(200).json({
        success:true,
        message:"Run API Hit Successfully",
        body:req.body
    });
};