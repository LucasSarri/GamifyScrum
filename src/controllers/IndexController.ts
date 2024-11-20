import { Request, Response } from "express";
import { planejamentoRepository } from "../repositories/planejamentoRepository";


export class IndexController {
    async RenderIndex (req: Request, res: Response) {
        const newPlanejamento = planejamentoRepository.create();
        const planejamento = await planejamentoRepository.save(newPlanejamento);
        return res.status(200).render('index', {planejamento: planejamento.id});
    }
}