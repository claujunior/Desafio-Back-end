import express from "express";
import { createTransferSchema } from "../../validation/transferValidation.js";
import { transfers, getSentTransfers, getReceivedTransfers } from "../../service/transferService.js";
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
});

router.get("/senders",authToken,async (req,res)=>{
    try {
        const sentTransfers = await getSentTransfers(req.user.id);
        res.status(200).json(sentTransfers);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.get("/receivers",authToken,async (req,res)=>{
    try {
        const receivedTransfers = await getReceivedTransfers(req.user.id);
        res.status(200).json(receivedTransfers);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

export default router