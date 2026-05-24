import express from "express";
import { creareLoginSchema, createUserSchema } from "../../validation/userValidation.js";
const router = express.Router();

router.post("/cadastro", (req, res) => {
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

router.post("/login", (req, res) => {
    const parsed = createLoginSchema.safeParse(req.body);
    if (!parsed) {
        return res.status(400).json({ errors: parsed.error.errors });
    }

})

export default router