import {
  getAllProductsService,
  getProductByIdService,
  createProductService,
  deleteProductService,
  updateProductService,
  updateProductPutService,
} from "../services/products.services.js";

import {
  validateCreateProduct,
  validatePatchProduct,
  validatePutProduct,
} from "../services/products.validators.js";

export const getAllProducts = async (req, res, next) => {
  try {
    const products = await getAllProductsService();
    return res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

export const getProductById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const product = await getProductByIdService(id);
    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    return res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

export const createProduct = async (req, res, next) => {
  try {
    const validation = validateCreateProduct(req.body);
    if (!validation.ok) {
      return res.status(400).json({ message: validation.message });
    }

    const newProduct = await createProductService(validation.data);
    return res.status(201).json(newProduct);
  } catch (error) {
    next(error);
  }
};

export const updateProductController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const validation = validatePatchProduct(req.body);
    if (!validation.ok) {
      return res.status(400).json({ message: validation.message });
    }

    // chequeo existencia
    const exists = await getProductByIdService(id);
    if (!exists) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    const updated = await updateProductService(id, validation.data);
    return res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};

export const updateProductPutController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const validation = validatePutProduct(req.body);
    if (!validation.ok) {
      return res.status(400).json({ message: validation.message });
    }

    // chequeo existencia
    const exists = await getProductByIdService(id);
    if (!exists) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    const updated = await updateProductPutService(id, validation.data);
    return res.status(200).json(updated);
  } catch (error) {
    next(error);
  }
};

export const deleteProductController = async (req, res, next) => {
  try {
    const { id } = req.params;

    // chequeo existencia
    const exists = await getProductByIdService(id);
    if (!exists) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    await deleteProductService(id);
    return res.status(204).send(); // borrado OK, sin body
  } catch (error) {
    next(error);
  }
};
