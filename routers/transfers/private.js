import express from "express";
import { createTransferSchema } from "../../validation/transferValidation.js";
import { transfers } from "../../service/transferService.js";
import { authToken } from "../../service/tokenService.js";
const router = express.Router();

router.post("/send",authToken,async (req,res)=>{
    const senderId = req.user.id;
    const parsed = createTransferSchema.safeParse(req.body);
    if(!parsed){
        return res.status(400).json({ errors: parsed.error.errors });
    }
    try{
      const transfer = await transfers( 
      senderId,
      parsed.data.receiverId, 
      parsed.data.amount
    );
    res.status(201).json(transfer);
    }
    catch(error){
        res.status(400).json({ message: error.message });
    }

})
router.get("/transfer/senders",authToken,async (req,res)=>{

})
router.get("/transfer/receivers",authToken,async (req,res)=>{
    
})
export default router