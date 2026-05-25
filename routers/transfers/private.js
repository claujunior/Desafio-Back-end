import express from "express";
import { createTransferSchema } from "../../validation/transferValidation";
import { transfers } from "../../service/transferService";
import { authToken } from "../../service/tokenService";
const router = express.Router();

router.post("/send",authToken,(req,res)=>{
    const senderId = req.user.id;
    const parsed = createTransferSchema.safeParse(req.body);
    if(!parsed){
        return res.status(400).json({ errors: parsed.error.errors });
    }
    try{
      const transfer = await transfers(  // ← faltou await e return
      senderId,
      parsed.data.receiverId,  // ← usar parsed.data, não req.body
      parsed.data.amount
    );
    res.status(201).json(transfer);
    }
    catch(error){
        res.status(400).json({ message: error.message });
    }

})


export default router