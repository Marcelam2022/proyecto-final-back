import "dotenv/config";
import express from "express";
import cors from "cors";
import productsRouter from "./routes/products.routes.js";
import authRouter from "./routes/auth.routes.js";
import { notFound } from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { db } from "./data/firebase.js";


const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares globales
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Servidor funcionando correctamente" });
});

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});


app.use("/auth", authRouter);
app.use("/api/products", productsRouter);

app.use(notFound);
app.use(errorHandler);

console.log("Firebase listo:", !!db);


app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
