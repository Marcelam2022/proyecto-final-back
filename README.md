# API de Productos – Node.js + Express + Firebase

API REST desarrollada con Node.js y Express para la gestión de productos.
Utiliza Firebase Firestore como base de datos y cuenta con autenticación mediante JWT.
Incluye validaciones, manejo de errores y protección de rutas sensibles.

---

## Tecnologías utilizadas

- Node.js
- Express
- Firebase Firestore (Admin SDK)
- JSON Web Tokens (JWT)
- dotenv
- Vercel (deploy)

---

## Instalación y ejecución local

### 1. Clonar el repositorio

```bash
git clone https://github.com/Marcelam2022/proyecto-final-back.git

Instalar Dependencias

npm install

Crear archivo .env

PORT=3000
JWT_SECRET=tu_clave_secreta

Ejecutar el servidor

npm start

El servidor se ejecuta en:

http://localhost:3000


Endpoints disponibles
Productos (públicos)
Obtener todos los productos

GET /api/products


Obtener producto por ID

GET /api/products/:id


Autenticación (JWT)
Login

POST /auth/login

La respuesta devuelve un token JWT que debe utilizarse para acceder a rutas protegidas.

## Nota importante sobre IDs

Los IDs de los productos son generados automáticamente por Firebase Firestore.
Estos IDs son strings alfanuméricos, por ejemplo:

```text
sY8k1AbCdeF234GhIJK

Por este motivo, para utilizar los endpoints:

GET /api/products/:id

PUT /api/products/:id

PATCH /api/products/:id

DELETE /api/products/:id

es necesario usar un ID real obtenido previamente desde:

GET /api/products

Si se utiliza un ID inexistente o incorrecto, la API responderá con 404 – Producto no encontrado.

Productos (protegidos con JWT)

Para estos endpoints es obligatorio enviar el token en el header:

Authorization: Bearer <TOKEN>

Crear producto

POST /api/products

Body (JSON):

{
  "name": "Producto ejemplo",
  "price": 1000,
  "stock": 10
}

Actualizar producto (PUT)

PUT /api/products/:id

Body (JSON):

{
  "name": "Producto actualizado",
  "price": 1200,
  "stock": 5
}


Actualizar parcialmente producto (PATCH)

PATCH /api/products/:id

Body (JSON):

{
  "price": 1500
}

Eliminar producto

DELETE /api/products/:id

Manejo de errores

400: errores de validación

401: token faltante

403: token inválido o expirado

404: recurso no encontrado

500: error interno del servidor

Deploy

La API se encuentra desplegada en Vercel:

https://proyecto-final-back-ten.vercel.app/

Ejemplo de endpoint en producción:

GET https://proyecto-final-back-ten.vercel.app/api/products


