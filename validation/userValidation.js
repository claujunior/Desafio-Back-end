import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  cpf: z.string().length(11),
  password: z.string().min(6),
  type: z.enum(["USUARIOS", "LOJISTAS"])
});