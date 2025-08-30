import { Request, Response } from "express";


export class SemanasController {
    async RenderSemanas (req: Request, res: Response) 
    {
        const parametro = req.params.parametro;
        

        //return res.status(200).render(`formAcoesRecompensadas`, {acoesRecompensadas, planejamento: parametro});
    }

    async addAcoesRecompensadasPlanejamento (req: Request, res: Response) 
    {
        
    }
}