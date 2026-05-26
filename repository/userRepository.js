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
  where: { id: id },
  include: { Wallet: true }
});
}

export async function findUserWithSentTransfers(id) {
    return await prisma.user.findUnique({
  where: { id: id },
  include: {
    sentTransfers: {
      include: {
        receiver: true
      }
    }
  }
});
}

export async function findUserWithReceivedTransfers(id) {
    return await prisma.user.findUnique({
  where: { id: id },
  include: {
    receivedTransfers: {
      include: {
        sender: true
      }
    }
  }
});
}

export default prisma;