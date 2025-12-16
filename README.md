# API de Productos – Node.js + Express + Firebase

API REST desarrollada con Node.js y Express que permite gestionar productos utilizando Firebase Firestore como base de datos.
Incluye validaciones, manejo de errores y protección de rutas mediante JWT.

# Tecnologías utilizadas

Node.js

Express

Firebase Firestore (Admin SDK)

JSON Web Tokens (JWT)

dotenv

Vercel (deploy)

Instalación y ejecución local

# Clonar el repositorio:

git clone https://github.com/Marcelam2022/proyecto-final-back.git


# Instalar dependencias:

npm install


# Crear archivo .env con las siguientes variables:

PORT=3000
JWT_SECRET=tu_clave_secreta


# Ejecutar el servidor:

npm start


El servidor se ejecuta en:

http://localhost:3000

Endpoints disponibles
Productos (públicos)
Obtener todos los productos
GET /api/products

Obtener producto por ID
GET /api/products/:id

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

Autenticación (JWT)

Las rutas protegidas requieren un token JWT válido.
El token debe enviarse en el header de la siguiente forma:

Authorization: Bearer <TOKEN>


Si el token es inválido o no se envía, la API responde con error 401 o 403.

Manejo de errores

400: errores de validación

401: token faltante

403: token inválido

404: recurso no encontrado

500: error interno del servidor

Deploy

La API se encuentra desplegada en Vercel:

https://proyecto-final-back-ten.vercel.app/


Ejemplo de endpoint en producción:

GET https://proyecto-final-back-ten.vercel.app/api/products