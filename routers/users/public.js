import express from "express";

const router = express.Router();

router.post("/cadastro",(req,res)=>{
    const parsed = createUserSchema.safeParse(req.body);
    if(!parsed){
        return res.status(400).json({ errors: parsed.error.errors });
    }
    res.status(201).json(user);
})

export default router