import { Request, Response } from "express";
import Personaje from "../models/personaje"; // Asegúrate de que la entidad esté correctamente importada
import { AppDataSource } from "../database/conexion";

class PersonajeController {
    private personajeRepository = AppDataSource.getRepository(Personaje); // Obtén el repositorio desde AppDataSource

    async consultarTodos(req: Request, res: Response) {
        try {
            const data = await this.personajeRepository.find(); // Usa el repositorio
            res.status(200).json(data);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: "Error desconocido" });
            }
        }
    }

    async agregar(req: Request, res: Response) {
        try {
            const newPersonaje = this.personajeRepository.create(req.body); // Crea la entidad
            const savedPersonaje = await this.personajeRepository.save(newPersonaje); // Guarda la entidad
            res.status(201).json(savedPersonaje);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: "Error desconocido" });
            }
        }
    }

    async consultarPorId(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.personajeRepository.findOneBy({ id: Number(id) }); // Usa el repositorio
            if (!data) {
                throw new Error('Personaje no encontrado');
            }
            res.status(200).json(data);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: "Error desconocido" });
            }
        }
    }

    async eliminarPorId(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.personajeRepository.findOneBy({ id: Number(id) });

            if (!data) {
                throw new Error('Personaje no encontrado');
            }

            await this.personajeRepository.delete({ id: Number(id) }); // Usa el repositorio
            res.status(204).send(); // 204 No Content
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: "Error desconocido" });
            }
        }
    }

    async actualizarPorId(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const data = await this.personajeRepository.findOneBy({ id: Number(id) });

            if (!data) {
                throw new Error('Personaje no encontrado');
            }

            await this.personajeRepository.update({ id: Number(id) }, req.body); // Usa el repositorio
            const dataActualizada = await this.personajeRepository.findOneBy({ id: Number(id) });
            res.status(200).json(dataActualizada);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: "Error desconocido" });
            }
        }
    }
}

export default PersonajeController;
