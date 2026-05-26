import prisma, { findId, findUserWithSentTransfers, findUserWithReceivedTransfers } from "../repository/userRepository.js"

export async function transfers(sendId, receiverId, amount) {
    const sender = await findId(sendId);
    const receiver = await findId(receiverId);

    if (!sender || !receiver) {
        throw new Error('Remetente ou destinatário não encontrado');
    }

    if (!sender.Wallet || sender.Wallet.balance < amount) {
        throw new Error('Saldo insuficiente');
    }

    const transfer = await prisma.$transaction(async (tx) => {
        await tx.wallet.update({
            where: { userId: sendId },
            data: { balance: { decrement: amount } }
        });

        await tx.wallet.upsert({
            where: { userId: receiverId },
            create: { userId: receiverId, balance: amount },
            update: { balance: { increment: amount } }
        });

        return await tx.transfer.create({
            data: {
                amount: amount,
                senderId: sendId,
                receiverId: receiverId
            }
        });
    });

    return transfer;
}

export async function getSentTransfers(userId) {
    const user = await findUserWithSentTransfers(userId);
    if (!user) {
        throw new Error('Usuário não encontrado');
    }
    return user.sentTransfers;
}

export async function getReceivedTransfers(userId) {
    const user = await findUserWithReceivedTransfers(userId);
    if (!user) {
        throw new Error('Usuário não encontrado');
    }
    return user.receivedTransfers;
}
