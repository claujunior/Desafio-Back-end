import { findId } from "../repository/userRepository.js"
import prisma from "../repository/transferRepository.js"

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