import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";

import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductController,
  updateProductPutController,
  deleteProductController,
} from "../controllers/products.controllers.js";

const router = Router();

// públicas
router.get("/", getAllProducts);
router.get("/:id", getProductById);

// protegidas
router.post("/", authMiddleware, createProduct);
router.patch("/:id", authMiddleware, updateProductController);
router.put("/:id", authMiddleware, updateProductPutController);
router.delete("/:id", authMiddleware, deleteProductController);

export default router;
