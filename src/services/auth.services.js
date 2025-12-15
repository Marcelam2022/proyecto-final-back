import jwt from "jsonwebtoken";

export const loginService = ({ email, password }) => {
  // usuario de prueba
  if (email !== "admin@admin.com" || password !== "1234") {
    return null;
  }

  const payload = { email, role: "admin" };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  return token;
};
