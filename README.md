# Proyecto Final Backend - API de Productos

API REST desarrollada con Node.js y Express, conectada a Firebase Firestore como base de datos.
Incluye autenticación con JWT y protección de rutas sensibles.

---

## 🚀 Tecnologías utilizadas

- Node.js
- Express
- Firebase Admin SDK
- Firestore
- JSON Web Tokens (JWT)
- dotenv

---

## 📁 Estructura del proyecto

src/
├── controllers/
├── services/
├── models/
├── routes/
├── middleware/
├── data/
├── keys/
├── index.js

---

## 🔐 Autenticación

Las rutas de creación, actualización y eliminación de productos están protegidas con JWT.

El token debe enviarse en el header:

Authorization: Bearer <token>

---

## 📦 Endpoints disponibles

### 🔹 Productos (públicos)

GET /api/products  
GET /api/products/:id  

### 🔹 Productos (protegidos con JWT)

POST /api/products  
PUT /api/products/:id  
PATCH /api/products/:id  
DELETE /api/products/:id  

---

## 🧪 Ejemplo de creación de producto (POST)

```json
{
  "name": "Collar para gato",
  "price": 2500,
  "stock": 3
}
⚙️ Variables de entorno
El proyecto utiliza un archivo .env con las siguientes variables:

PORT=3000
JWT_SECRET=supersecreto

🔥 Firebase
La conexión a Firestore se realiza utilizando Firebase Admin SDK.
Las credenciales se manejan mediante un archivo de clave privada que no se sube al repositorio por razones de seguridad.

▶️ Cómo ejecutar el proyecto
Clonar el repositorio
Instalar dependencias:

npm install
Ejecutar el servidor:


npm start
El servidor se ejecuta en:
http://localhost:3000


---
## importante!
- El archivo `.env` y la clave de Firebase están ignorados mediante `.gitignore`
- El proyecto está preparado para uso real y despliegue

---