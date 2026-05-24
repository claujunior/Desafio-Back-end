import express from "express";
import "dotenv/config";
import publicUserRoutes from "./routers/users/public.js";

const app = express();
app.use(express.json())
app.use("/users",publicUserRoutes);

app.listen(3000,()=> console.log("servidor rodando"))