import { Request, Response } from "express";
import { cenarioDesejadoRepository } from "../repositories/cenarioDesejadoRepository";
import { planejamentoRepository } from "../repositories/planejamentoRepository";
import { conceitosScrumRepository } from "../repositories/conceitosScrumRepository";
import { gamificacaoRepository } from "../repositories/gamificacaoRepository";


export class GamificacaoController {
    async RenderGamificacao (req: Request, res: Response) {
        const parametro = req.params.parametro;

        const gamificacao = await gamificacaoRepository
        .createQueryBuilder("gamificacao")
        .innerJoinAndSelect("gamificacao.ag_gamificacao", "ag_gamificacao")
        .getMany();

        return res.status(200).render(`formElementosGamificacao`, {gamificacao, planejamento: parametro});
    }

    async addGamificacaoPlanejamento (req: Request, res: Response) {
        const corpo = req.body;
    
        const planejamento = await planejamentoRepository.findOne({
            where: {id: corpo.idPlanejamento},
            relations: ['elementos_gamificacao']
        });

        if (!planejamento) {
            throw new Error(`Planejamento com ID ${corpo.idPlanejamento} não encontrado.`);
        }

        const elementos_gamificacao = await gamificacaoRepository.findByIds(corpo.ativo);

        if (elementos_gamificacao.length === 0) {
            throw new Error('Nenhum dos cenários fornecidos foi encontrado.');
        }

        elementos_gamificacao.forEach((elemento_gamificacao) => {
            if (!planejamento.elementos_gamificacao.some((c) => c.id === elemento_gamificacao.id)) {
                planejamento.elementos_gamificacao.push(elemento_gamificacao);
            }
        });

        await planejamentoRepository.save(planejamento);
    
        return res.status(200).redirect(`/mapeamento/${corpo.idPlanejamento}`);
    }
}