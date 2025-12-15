import { ProductsModel } from "../models/products.model.js";

export const getAllProductsService = async () => ProductsModel.getAll();

export const getProductByIdService = async (id) => ProductsModel.getById(id);

export const createProductService = async ({ name, price, stock }) =>
  ProductsModel.create({ name, price, stock });

export const deleteProductService = async (id) => ProductsModel.remove(id);

export const updateProductService = async (id, data) =>
  ProductsModel.update(id, data);

export const updateProductPutService = async (id, data) =>
  ProductsModel.update(id, data);

