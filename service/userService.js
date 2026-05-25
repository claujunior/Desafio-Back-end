import { findEmail,createUser,findCpf } from "../repository/userRepository.js";

export async function criarUsuario(user) {
    const emailDuplicado = await findEmail(user.email)
    const cpfDuplicado = await findCpf(user.cpf)
    if(emailDuplicado || cpfDuplicado){
        //excepition
    }
    return await createUser({
        name: user.name,
        email: user.email,
        cpf: user.cpf,
        password: user.password,
        type: "USUARIOS"
    })
}
export async function login(user) {
    const userlogin = await findEmail(user.email)
    if(!userlogin){
        //exception
    }
    if(userlogin.password!=user.password){
        //exception
    }
    return //token
}