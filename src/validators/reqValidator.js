import { z } from "zod";
export const CodeSchema =z.object({
    language:z.string().trim().min(1, "Language is required"),
    code: z.string().trim().min(1, "Code cannot be empty"),
    stdin:z.string().optional().default("")
});