# 💸 Desafio Back-end

API de transferências inspirada no PicPay.

## 🚀 Tecnologias

* Node.js
* Express
* Prisma
* PostgreSQL
* JWT

---

## ⚙️ Funcionalidades

* Cadastro de usuários
* Login com JWT
* Transferências entre usuários
* Validação de saldo
* Lojista não pode transferir
* Integração com serviço autorizador

---

## 📦 Instalação

```bash
git clone https://github.com/claujunior/Desafio-Back-end.git

cd Desafio-Back-end

npm install
```

---

## 🔑 .env

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5433/picpay"
JWT_SECRET=sua_chave
```

---

## 🐳 Docker

```bash
docker compose up -d
```

---

## 🛠️ Prisma

```bash
npx prisma migrate dev
```

---

## ▶️ Rodando o projeto

```bash
npm run dev
```

Servidor:

```bash
http://localhost:3000
```

---

## 📌 Exemplo de transferência

```http
POST /transfer
```

```json
{
  "value": 100,
  "payer": 1,
  "payee": 2
}
```

---

## 👨‍💻 Autor

Claudivan Costa

urlGitHub Repository[https://github.com/claujunior/Desafio-Back-end](https://github.com/claujunior/Desafio-Back-end)

