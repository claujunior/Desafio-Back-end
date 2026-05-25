import jwt from "jsonwebtoken";


export function generateToken(user) {
  return jwt.sign(
    { id: user.id },  
    process.env.JWT_SECRET,                       
    { expiresIn: "1d" }               
  );
}

export function authToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Token não enviado" });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: "Token inválido" });
  }
}