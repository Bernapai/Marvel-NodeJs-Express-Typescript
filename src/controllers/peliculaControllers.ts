import { Request, Response } from "express";
import { AppDataSource } from "../database/conexion";
import Pelicula from "../models/pelicula"; // Asegúrate de que la entidad esté correctamente importada

class PeliculaController {
    private peliculaRepository = AppDataSource.getRepository(Pelicula); // Obtén el repositorio

    async consultarTodos(req: Request, res: Response) {
        try {
            const data = await this.peliculaRepository.find(); // Usa el repositorio
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
            const newPelicula = this.peliculaRepository.create(req.body); // Crea la entidad
            const savedPelicula = await this.peliculaRepository.save(newPelicula); // Guarda la entidad
            res.status(201).json(savedPelicula);
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
            const data = await this.peliculaRepository.findOneBy({ id: Number(id) }); // Usa el repositorio
            if (!data) {
                throw new Error('Pelicula no encontrada');
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
            const data = await this.peliculaRepository.findOneBy({ id: Number(id) });

            if (!data) {
                throw new Error('Pelicula no encontrada');
            }

            await this.peliculaRepository.delete({ id: Number(id) }); // Usa el repositorio
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
            const data = await this.peliculaRepository.findOneBy({ id: Number(id) });

            if (!data) {
                throw new Error('Pelicula no encontrada');
            }

            await this.peliculaRepository.update({ id: Number(id) }, req.body); // Usa el repositorio
            const dataActualizada = await this.peliculaRepository.findOneBy({ id: Number(id) });
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

export default PeliculaController;
