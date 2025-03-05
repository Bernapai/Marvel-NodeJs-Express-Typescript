import { Request, Response } from "express";

class ComicController {

    constructor() {

    }


    consultarTodos(req: Request, res: Response) {
        try {
            res.status(200).json({ mensaje: "Consulta exitosa" });
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: "Error desconocido" });
            }
        }
    }

    agregar(req: Request, res: Response) {
        try {
            res.status(200).json({ mensaje: "Consulta exitosa" });
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: "Error desconocido" });
            }
        }
    }


    consultarPorId(req: Request, res: Response) {
        try {
            res.status(200).json({ mensaje: "Consulta exitosa" });
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: "Error desconocido" });
            }
        }
    }

    eliminarPorId(req: Request, res: Response) {
        try {
            res.status(200).json({ mensaje: "Consulta exitosa" });
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ error: error.message });
            } else {
                res.status(500).json({ error: "Error desconocido" });
            }
        }
    }

    actualizarPorId(req: Request, res: Response) {
        try {
            res.status(200).json({ mensaje: "Consulta exitosa" });
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
