import express from 'express';
import PersonajeController from '../controllers/personajeControllers';

const router = express.Router()
const personajeController = new PersonajeController();

// Ruta para obtener todos los personajes
router.get("/personajes", personajeController.consultarTodos);

// Ruta para consultar un personaje por ID (unificada)
router.get("/personajes/:id", personajeController.consultarPorId);

// Ruta para agregar un nuevo personaje
router.post("/personajes", personajeController.agregar);

// Ruta para actualizar un personaje por ID
router.put("/personajes/:id", personajeController.actualizarPorId);

// Ruta para eliminar un personaje por ID
router.delete("/personajes/:id", personajeController.eliminarPorId);

export default router;