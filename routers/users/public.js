import express from "express";
import { creareLoginSchema, createUserSchema } from "../../validation/userValidation.js";
import { criarUsuario,login } from "../../service/userService.js";
const router = express.Router();

router.post("/cadastro",async (req, res) => {
    const parsed = createUserSchema.safeParse(req.body);
    if (!parsed) {
        return res.status(400).json({ errors: parsed.error.errors });
    }
    try {
        const user = await criarUsuario(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

router.post("/login", async (req, res) => {
    const parsed = createLoginSchema.safeParse(req.body);
    if (!parsed) {
        return res.status(400).json({ errors: parsed.error.errors });
    }
    try{
        const token = await login(req.body)
        res.status(200).json({token})
    }
    catch(error){
        res.status(400).json({ message: error.message });
    }
})

export default router