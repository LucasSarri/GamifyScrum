import { Request, Response } from "express";
import { planejamentoRepository } from "../repositories/planejamentoRepository";
import { recompensasRepository } from "../repositories/recompensasRepository";


export class RecompensasController {
    async RenderRecompensas (req: Request, res: Response) {
        const parametro = req.params.parametro;
        const recompensas = await recompensasRepository.createQueryBuilder("recompensas")
        .innerJoinAndSelect("recompensas.ag_recompensa", "ag_recompensa")
        .getMany();

        console.log(recompensas);
        return res.status(200).render(`formRecompensas`, {recompensas, planejamento: parametro});
    }

    async addRecompensasPlanejamento (req: Request, res: Response) {
        const corpo = req.body;

        console.log(corpo);

       /* const planejamento = await planejamentoRepository.findOne({
            where: {id: corpo.idPlanejamento},
            relations: ['mapeamentos']
        });

        if (!planejamento) {
            throw new Error(`Planejamento com ID ${corpo.idPlanejamento} não encontrado.`);
        }

        const mapeamentos = await mapeamentoRepository.findByIds(corpo.ativo);

        if (mapeamentos.length === 0) {
            throw new Error('Nenhum dos cenários fornecidos foi encontrado.');
        }

        mapeamentos.forEach((mapeamento) => {
            if (!planejamento.mapeamentos.some((c) => c.id === mapeamento.id)) {
                planejamento.mapeamentos.push(mapeamento);
            }
        });

        await planejamentoRepository.save(planejamento);
        console.log(planejamento);
        return res.status(200).redirect(`/elementos_gamificacao/${corpo.idPlanejamento}`);*/
    }
}