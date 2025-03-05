
import express from 'express';
import comicControllers from '../controllers/comicControllers'

const router = express.Router();
const comicController = new comicControllers

// Ruta para obtener todos los personajes
router.get("/comics", comicController.consultarTodos);

// Ruta para consultar un personaje por ID (unificada)
router.get("/comics/:id", comicController.consultarPorId);

// Ruta para agregar un nuevo personaje
router.post("/comics", comicController.agregar);

// Ruta para actualizar un personaje por ID
router.put("/comics/:id", comicController.actualizarPorId);

// Ruta para eliminar un personaje por ID
router.delete("/comics/:id", comicController.eliminarPorId);



export default router;