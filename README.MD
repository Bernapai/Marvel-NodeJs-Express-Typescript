# 🦸‍♂️ Marvel API REST 🦹‍♀️

Bienvenido a **Marvel API REST**, una API que proporciona información sobre personajes, cómics y películas del universo Marvel. ¡Explora el multiverso con nuestros endpoints! 🌌

## 🚀 Características  
✅ Información detallada de personajes 🦸‍♂️  
✅ Datos de cómics 📖  
✅ Listado de películas 🎬  
✅ Relación entre personajes, cómics y películas 🔗  
✅ Operaciones CRUD completas 🔄  

## 🛠 Tecnologías utilizadas  
- 🏗 **Backend**: Node.js + Express (o el framework que uses)  
- 🛢 **Base de datos**: MongoDB / PostgreSQL / MySQL  
- 🔐 **Autenticación**: JWT / OAuth (si aplica)  


## 📌 Endpoints principales  
### 📍 **Personajes**  
- `GET /personajes` → Lista todos los personajes  
- `GET /personajes/{id}` → Obtiene un personaje por su ID  
- `POST /personajes` → Crea un nuevo personaje  
- `PUT /personajes/{id}` → Actualiza un personaje completamente  
- `DELETE /personajes/{id}` → Elimina un personaje  

### 📍 **Cómics**  
- `GET /comics` → Lista todos los cómics  
- `GET /comics/{id}` → Obtiene un cómic por su ID  
- `POST /comics` → Agrega un nuevo cómic  
- `PUT /comics/{id}` → Actualiza un cómic completamente   
- `DELETE /comics/{id}` → Elimina un cómic  

### 📍 **Películas**  
- `GET /peliculas` → Lista todas las películas  
- `GET /peliculas/{id}` → Obtiene una película por su ID  
- `POST /peliculas` → Agrega una nueva película  
- `PUT /peliculas/{id}` → Actualiza una película completamente   
- `DELETE /peliculas/{id}` → Elimina una película  

### 📍 **Relaciones**  
- `GET /personajes/{id}/comics` → Lista los cómics en los que aparece un personaje  
- `GET /personajes/{id}/peliculas` → Lista las películas en las que aparece un personaje  

