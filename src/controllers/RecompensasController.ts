import { Request, Response } from "express";
import { planejamentoRepository } from "../repositories/planejamentoRepository";
import { recompensasRepository } from "../repositories/recompensasRepository";


export class RecompensasController {
    async RenderRecompensas (req: Request, res: Response) {
        const parametro = req.params.parametro;
        const recompensas = await recompensasRepository.createQueryBuilder("recompensas")
        .innerJoinAndSelect("recompensas.ag_recompensa", "ag_recompensa")
        .getMany();

        return res.status(200).render(`formRecompensas`, {recompensas, planejamento: parametro});
    }

    async addRecompensasPlanejamento (req: Request, res: Response) {
        const corpo = req.body;

        const planejamento = await planejamentoRepository.findOne({
            where: {id: corpo.idPlanejamento},
            relations: ['recompensas']
        });

        if (!planejamento) {
            throw new Error(`Planejamento com ID ${corpo.idPlanejamento} não encontrado.`);
        }

        const recompensas = await recompensasRepository.findByIds(corpo.ativo);

        if (recompensas.length === 0) {
            throw new Error('Nenhum dos cenários fornecidos foi encontrado.');
        }

        recompensas.forEach((recompensa) => {
            if (!planejamento.recompensas.some((c) => c.id === recompensa.id)) {
                planejamento.recompensas.push(recompensa);
            }
        });

        await planejamentoRepository.save(planejamento);
        return res.status(200).redirect(`/acoesrecompensadas/${corpo.idPlanejamento}`);
    }
}