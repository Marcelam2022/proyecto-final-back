import { loginService } from "../services/auth.services.js";

export const loginController = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Faltan credenciales" });
  }

  const token = loginService({ email, password });

  if (!token) {
    return res.status(401).json({ message: "Credenciales inválidas" });
  }

  res.status(200).json({ token });
};
