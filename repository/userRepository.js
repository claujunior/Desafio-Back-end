import { PrismaClient } from "@prisma/client/extension";

const prisma=PrismaClient();


export async function createUser(user) {
    return await prisma.user.create({ data:user });
}
export async function findEmail(email) {
    prisma.user.findUnique({
  where: { email: email }
});
}
export async function findCpf(cpf) {
    prisma.user.findUnique({
  where: { cpf: cpf }
});
}