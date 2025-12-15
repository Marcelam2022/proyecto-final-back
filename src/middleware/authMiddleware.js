import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: "Falta token (Authorization)" });
  }

  const [type, token] = authHeader.split(" ");

  if (type !== "Bearer" || !token) {
    return res.status(401).json({ message: "Formato inválido. Usá: Bearer <token>" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // por si querés usarlo después
    next();
  } catch (error) {
    return res.status(403).json({ message: "Token inválido o expirado" });
  }
};
