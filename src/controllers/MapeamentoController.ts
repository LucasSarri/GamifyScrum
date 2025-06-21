import { Request, Response } from "express";
import { mapeamentoRepository } from "../repositories/mapeamentoRepository";
import { planejamentoRepository } from "../repositories/planejamentoRepository";


export class MapeamentoController {
    async RenderMapeamento (req: Request, res: Response) {
        const parametro = req.params.parametro;
        const mapeamentos = await mapeamentoRepository.createQueryBuilder("mapeamento")
        .innerJoinAndSelect("mapeamento.ag_mapeamento", "ag_mapeamento")
        .getMany();

        return res.status(200).render(`formMapeamento`, {mapeamentos, planejamento: parametro});
    }

    async addMapeamentoPlanejamento (req: Request, res: Response) {
        const corpo = req.body;

        const planejamento = await planejamentoRepository.findOne({
            where: {id: corpo.idPlanejamento},
            relations: ['mapeamentos']
        });

        console.log(planejamento)

        /*if (!planejamento) {
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