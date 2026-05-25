import express from "express";
import "dotenv/config";
import publicUserRoutes from "./routers/users/public.js";
import transferRoutes from "./routers/transfers/private.js"
const app = express();
app.use(express.json())
app.use("/user",publicUserRoutes);
app.use("/transfer",transferRoutes)


app.listen(3000,()=> console.log("servidor rodando"))