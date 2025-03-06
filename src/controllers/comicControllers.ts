import { Request, Response } from "express";
import { AppDataSource } from "../database/conexion";
import Comic from "../models/comic"; // Asegúrate de que la entidad esté correctamente importada

class ComicController {
    private comicRepository = AppDataSource.getRepository(Comic); // Obtén el repositorio

    async consultarTodos(req: Request, res: Response) {
        try {
            const data = await this.comicRepository.find(); // Usa el repositorio
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
            const newComic = this.comicRepository.create(req.body); // Crea la entidad
            const savedComic = await this.comicRepository.save(newComic); // Guarda la entidad
            res.status(201).json(savedComic);
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
            const data = await this.comicRepository.findOneBy({ id: Number(id) }); // Usa el repositorio
            if (!data) {
                throw new Error('Comic no encontrado');
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
            const data = await this.comicRepository.findOneBy({ id: Number(id) });

            if (!data) {
                throw new Error('Comic no encontrado');
            }

            await this.comicRepository.delete({ id: Number(id) }); // Usa el repositorio
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
            const data = await this.comicRepository.findOneBy({ id: Number(id) });

            if (!data) {
                throw new Error('Comic no encontrado');
            }

            await this.comicRepository.update({ id: Number(id) }, req.body); // Usa el repositorio
            const dataActualizada = await this.comicRepository.findOneBy({ id: Number(id) });
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

export default ComicController;
