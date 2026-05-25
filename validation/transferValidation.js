import { z } from "zod";

export const createTransferSchema = z.object({
    amount: z.number().positive(),
    receiverId: z.number().int().positive()
});