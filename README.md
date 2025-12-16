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
2. Instalar dependencias
bash
Copiar código
npm install
3. Crear archivo .env
env
Copiar código
PORT=3000
JWT_SECRET=tu_clave_secreta
4. Ejecutar el servidor
bash
Copiar código
npm start
El servidor se ejecuta en:

arduino
Copiar código
http://localhost:3000
Endpoints disponibles
Productos (públicos)
Obtener todos los productos:

bash
Copiar código
GET /api/products
Obtener producto por ID:

bash
Copiar código
GET /api/products/:id
Autenticación (JWT)
Obtener token (login)
bash
Copiar código
POST /auth/login
Body (JSON):

json
Copiar código
{
  "email": "usuario@ejemplo.com",
  "password": "123456"
}
El endpoint devuelve un token JWT que debe enviarse en el header para acceder a rutas protegidas:

makefile
Copiar código
Authorization: Bearer <TOKEN>
Nota importante sobre IDs
Los IDs de los productos son generados automáticamente por Firebase Firestore.
Estos IDs son strings alfanuméricos, por ejemplo:

text
Copiar código
sY8k1AbCdeF234GhIJK
Para utilizar los siguientes endpoints:

bash
Copiar código
PUT /api/products/:id
PATCH /api/products/:id
DELETE /api/products/:id
es necesario usar un ID real obtenido previamente desde:

bash
Copiar código
GET /api/products
Si se utiliza un ID inexistente o incorrecto, la API responderá con:

perl
Copiar código
404 – Producto no encontrado
Productos (protegidos con JWT)
Para estos endpoints es obligatorio enviar el token en el header:

makefile
Copiar código
Authorization: Bearer <TOKEN>
Crear producto
bash
Copiar código
POST /api/products
Body (JSON):

json
Copiar código
{
  "name": "Producto ejemplo",
  "price": 1000,
  "stock": 10
}
Actualizar producto (PUT)
bash
Copiar código
PUT /api/products/:id
Body (JSON):

json
Copiar código
{
  "name": "Producto actualizado",
  "price": 1200,
  "stock": 5
}
Actualizar parcialmente producto (PATCH)
bash
Copiar código
PATCH /api/products/:id
Body (JSON):

json
Copiar código
{
  "price": 1500
}
Eliminar producto
bash
Copiar código
DELETE /api/products/:id
Manejo de errores
400: errores de validación

401: token faltante

403: token inválido o expirado

404: recurso no encontrado

500: error interno del servidor

Deploy
La API se encuentra desplegada en Vercel:

arduino
Copiar código
https://proyecto-final-back-ten.vercel.app/
Ejemplo de endpoint en producción:

sql
Copiar código
GET https://proyecto-final-back-ten.vercel.app/api/products