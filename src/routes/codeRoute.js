import express from "express";
import { runCode } from "../controllers/codeController.js";
import { validate } from "../middlewares/validateCode.js";
import { CodeSchema } from "../validators/reqValidator.js";
const router = express.Router();

router.post("/run",validate(CodeSchema),runCode);

export default router;