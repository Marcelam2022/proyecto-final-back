export const validateCreateProduct = (body) => {
  const { name, price, stock } = body || {};

  if (!name || price === undefined) {
    return { ok: false, message: "Faltan datos obligatorios: name, price" };
  }

  const cleanName = String(name).trim();
  const priceNumber = Number(price);
  const stockNumber = stock === undefined ? 0 : Number(stock);

  if (!cleanName) {
    return { ok: false, message: "name no puede estar vacío" };
  }

  if (Number.isNaN(priceNumber) || priceNumber <= 0) {
    return { ok: false, message: "price debe ser un número mayor a 0" };
  }

  if (Number.isNaN(stockNumber) || stockNumber < 0) {
    return { ok: false, message: "stock debe ser un número >= 0" };
  }

  return {
    ok: true,
    data: { name: cleanName, price: priceNumber, stock: stockNumber },
  };
};

export const validatePatchProduct = (body) => {
  if (!body || Object.keys(body).length === 0) {
    return { ok: false, message: "No enviaste datos para actualizar" };
  }

  const allowed = ["name", "price", "stock"];
  const keys = Object.keys(body);
  const invalidKey = keys.find((k) => !allowed.includes(k));
  if (invalidKey) {
    return { ok: false, message: `Campo no permitido: ${invalidKey}` };
  }

  
  return { ok: true, data: body };
};

export const validatePutProduct = (body) => {
  const { name, price, stock } = body || {};

  if (!name || price == null || stock == null) {
    return { ok: false, message: "PUT requiere name, price y stock completos" };
  }

  const cleanName = String(name).trim();
  const priceNumber = Number(price);
  const stockNumber = Number(stock);

  if (!cleanName) {
    return { ok: false, message: "name no puede estar vacío" };
  }

  if (Number.isNaN(priceNumber) || priceNumber <= 0) {
    return { ok: false, message: "price debe ser un número mayor a 0" };
  }

  if (Number.isNaN(stockNumber) || stockNumber < 0) {
    return { ok: false, message: "stock debe ser un número >= 0" };
  }

  return {
    ok: true,
    data: { name: cleanName, price: priceNumber, stock: stockNumber },
  };
};
