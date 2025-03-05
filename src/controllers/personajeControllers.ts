import { Request, Response } from "express";
import Personaje from "../models/personaje";

class PersonajeController {

    constructor() {

    }


    async consultarTodos(req: Request, res: Response) {
        try {
            const data = await Personaje.find()
            res.status(200).json(data)
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
            const newPersonaje = await Personaje.save(req.body);
            res.status(201).json(newPersonaje)
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
            const data = await Personaje.findOneBy({ id: Number(id) })
            if (!data) {
                throw new Error('Personaje no encontrado')
            }
            res.status(200).json(data)
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
            const data = await Personaje.findOneBy({ id: Number(id) });

            if (!data) {
                throw new Error('Personaje no encontrado')
            }

            await Personaje.delete({ id: Number(id) });
            const dataEliminada = await Personaje.findOneBy({ id: Number(id) });
            res.status(204).json(dataEliminada);

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

            const data = await Personaje.findOneBy({ id: Number(id) });

            if (!data) {
                throw new Error('Personaje no encontrado')
            }

            await Personaje.update({ id: Number(id) }, req.body);
            const dataActualizada = await Personaje.findOneBy({ id: Number(id) });
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
