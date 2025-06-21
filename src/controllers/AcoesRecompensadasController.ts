import { Request, Response } from "express";
import { planejamentoRepository } from "../repositories/planejamentoRepository";
import { acoesRecompensadasRepository } from "../repositories/acoesRecompensadasRepository";


export class AcoesRecompensadasController {
    async RenderAcoesRecompensadas (req: Request, res: Response) {
        const parametro = req.params.parametro;
        const acoesRecompensadas = await acoesRecompensadasRepository.createQueryBuilder("acoesRecompensadas")
        .getMany();

        return res.status(200).render(`formAcoesRecompensadas`, {acoesRecompensadas, planejamento: parametro});
    }

    async addAcoesRecompensadasPlanejamento (req: Request, res: Response) {
        const corpo = req.body;

        const planejamento = await planejamentoRepository.findOne({
            where: {id: corpo.idPlanejamento},
            relations: ['acoes_recompensadas']
        });

        if (!planejamento) {
            throw new Error(`Planejamento com ID ${corpo.idPlanejamento} não encontrado.`);
        }

        const acoesrecompensadas = await acoesRecompensadasRepository.findByIds(corpo.ativo);

        if (acoesrecompensadas.length === 0) {
            throw new Error('Nenhum dos cenários fornecidos foi encontrado.');
        }

        acoesrecompensadas.forEach((acaorecompensada) => {
            if (!planejamento.acoes_recompensadas.some((c) => c.id === acaorecompensada.id)) {
                planejamento.acoes_recompensadas.push(acaorecompensada);
            }
        });

        await planejamentoRepository.save(planejamento);
        return res.status(200).redirect(`/planejamento/${corpo.idPlanejamento}`);
    }
}