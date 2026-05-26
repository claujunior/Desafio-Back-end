import { PrismaClient } from "@prisma/client/extension";


const { PrismaClient } = pkg;

const prisma = new PrismaClient();

export default prisma;