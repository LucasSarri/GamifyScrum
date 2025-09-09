import { Request, Response } from "express";
import { planejamentoRepository } from "../repositories/planejamentoRepository";
import { regraRepository } from "../repositories/regraRepository";

export class RegrasController 
{
    async RenderRecompensas (req: Request, res: Response) 
    {
        const parametro = req.params.parametro;
        const regras = await regraRepository.createQueryBuilder("regra")
        .getMany();
        return res.status(200).render(`formRegras`, {regras, planejamento: parametro});
    }

    async addRegrasPlanejamento (req: Request, res: Response) 
    {
        const corpo = req.body;

        const planejamento = await planejamentoRepository.findOne({
            where: {id: Number(corpo.idPlanejamento)},
            relations: ['regras']
        });

        if (!planejamento) 
        {
            throw new Error(`Planejamento com ID ${corpo.idPlanejamento} não encontrado.`);
        }

        const regras = await regraRepository.findByIds(corpo.ativo);

        if (regras.length === 0) 
        {
            throw new Error('Nenhum dos cenários fornecidos foi encontrado.');
        }

        const regrasExistentes = await planejamento.regras;

        regras.forEach((regra) => {
            if (!regrasExistentes.some((c) => c.id === regra.id)) {
                regrasExistentes.push(regra);
            }
        });

        await planejamentoRepository.save(planejamento);
        return res.status(200).redirect(`/conceito_scrum/${corpo.idPlanejamento}`);
    }
}