import express from "express";
import "dotenv/config";
import publicUserRoutes from "./routers/users/public.js";
import privateWallet from "./routers/wallet/private.js"
const app = express();
app.use(express.json())
app.use("/user",publicUserRoutes);
app.use("/wallet",privateWallet);

app.listen(3000,()=> console.log("servidor rodando"))