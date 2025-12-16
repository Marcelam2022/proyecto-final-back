# API de Productos – Node.js + Express + Firebase

API REST desarrollada con Node.js y Express que permite gestionar productos.
Utiliza Firebase Firestore como base de datos y protege rutas mediante JWT.

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

### Clonar el repositorio
```md
git clone https://github.com/Marcelam2022/proyecto-final-back.git

Instalar dependencias
npm install
```md
Crear archivo .env
PORT=3000
JWT_SECRET=tu_clave_secreta
```md
Ejecutar el servidor
npm start

```md
El servidor se ejecuta en:

http://localhost:3000
```md
Endpoints disponibles
Productos (públicos)
```md
Obtener todos los productos

GET /api/products

```md
Obtener producto por ID

GET /api/products/:id
```md
Productos (protegidos con JWT)

Para estos endpoints es obligatorio enviar el token en el header:

Authorization: Bearer <TOKEN>

```md
Crear producto

POST /api/products


Body (JSON):

{
  "name": "Producto ejemplo",
  "price": 1000,
  "stock": 10
}

```md
Actualizar producto (PUT)

PUT /api/products/:id


Body (JSON):

{
  "name": "Producto actualizado",
  "price": 1200,
  "stock": 5
}

```md
Actualizar parcialmente producto (PATCH)

PATCH /api/products/:id


Body (JSON):

{
  "price": 1500
}

```md
Eliminar producto

DELETE /api/products/:id
```mdmd
Autenticación (JWT)

Las rutas protegidas requieren un token JWT válido.
El token debe enviarse en el header de la siguiente forma:

Authorization: Bearer <TOKEN>


Si el token es inválido o no se envía, la API responde con error 401 o 403.

## Nota importante sobre IDs

Los IDs de los productos en Firestore son strings generados por Firebase, por ejemplo:

sY8k1AbCdeF234GhIJK


## Para los endpoints que reciben :id (GET, PUT, PATCH, DELETE)
se debe utilizar un ID real obtenido previamente desde:

GET /api/products

Manejo de errores
400 - Error de validación  
401 - Token faltante  
403 - Token inválido  
404 - Recurso no encontrado  
500 - Error interno del servidor

## Deploy

La API se encuentra desplegada en Vercel:

https://proyecto-final-back-ten.vercel.app/


Ejemplo en producción:

GET https://proyecto-final-back-ten.vercel.app/api/products

```