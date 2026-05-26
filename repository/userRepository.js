import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


export async function createUser(user) {
    return await prisma.user.create({ data:user });
}
export async function findEmail(email) {
    return await prisma.user.findUnique({
  where: { email: email }
});
}
export async function findCpf(cpf) {
    return await prisma.user.findUnique({
  where: { cpf: cpf }
});
}
export async function findId(id) {
    return await prisma.user.findUnique({
  where: { id: id }
});
}

export default prisma;