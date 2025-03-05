
import express from 'express';
import peliculaControllers from '../controllers/peliculaControllers'

const router = express.Router();
const peliculaController = new peliculaControllers

// Ruta para obtener todos los peliculas
router.get("/peliculas", peliculaController.consultarTodos);

// Ruta para consultar un personaje por ID (unificada)
router.get("/peliculas/:id", peliculaController.consultarPorId);

// Ruta para agregar un nuevo personaje
router.post("/peliculas", peliculaController.agregar);

// Ruta para actualizar un personaje por ID
router.put("/peliculas/:id", peliculaController.actualizarPorId);

// Ruta para eliminar un personaje por ID
router.delete("/peliculas/:id", peliculaController.eliminarPorId);



export default router;