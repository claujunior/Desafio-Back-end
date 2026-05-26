import { findId } from "../repository/userRepository.js"

export async function transfers(sendId,receiverId,amount) {
    const sernder = await findId(sendId);
    const receiver = await findId(receiverId);
    if(sernder.wallet.amount<amount){
        //exception
    }
    return 
}