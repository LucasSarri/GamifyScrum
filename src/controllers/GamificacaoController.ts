import { In } from "typeorm";
import { Request, Response } from "express";
import { planejamentoRepository } from "../repositories/planejamentoRepository";
import { gamificacaoRepository } from "../repositories/gamificacaoRepository";
import { conceitosScrumRepository } from "../repositories/conceitosScrumRepository";
import { sugestaoRepository } from "../repositories/sugestaoRepository";


export class GamificacaoController 
{
    async RenderGamificacao (req: Request, res: Response) 
    {
        const parametro = req.params.parametro;
        const gamificacao = await gamificacaoRepository.createQueryBuilder("gamificacao").innerJoinAndSelect("gamificacao.ag_gamificacao", "ag_gamificacao").getMany();

        const scrums = await conceitosScrumRepository.find({
            where: {planejamentos:{id:Number(parametro)}}
        });

        const idsScrums = scrums.map(s => s.id);

        const sugestoes = await sugestaoRepository.find({
            where: {
                origem_tipo: "Scrum",
                origem_id: In(idsScrums),
                destino_tipo: "Gamificacao"
            }
        });

        const idsSugestoes = sugestoes.map(s => Number(s.destino_id));

        return res.status(200).render(`formElementosGamificacao`, {gamificacao, idsSugestoes, planejamento: parametro});
    }

    async addGamificacaoPlanejamento (req: Request, res: Response) 
    {
        const corpo = req.body;

        const planejamento = await planejamentoRepository.findOne({
            where: {id: Number(corpo.idPlanejamento)},
            relations: ['elementos_gamificacao']
        });

        if (!planejamento) 
        {
            throw new Error(`Planejamento com ID ${corpo.idPlanejamento} não encontrado.`);
        }

        const elementos_gamificacao = await gamificacaoRepository.findByIds(corpo.elementosGamificacao);

        if (elementos_gamificacao.length === 0) 
        {
            throw new Error('Nenhum dos cenários fornecidos foi encontrado.');
        }

        const elementosgamificacaoExistentes = await planejamento.elementos_gamificacao;

        elementos_gamificacao.forEach((elemento_gamificacao) => {
            if (!elementosgamificacaoExistentes.some((c) => c.id === elemento_gamificacao.id))
            {
                elementosgamificacaoExistentes.push(elemento_gamificacao);
            }
        });

        await planejamentoRepository.save(planejamento);
    
        return res.status(200).redirect(`/mapeamento/${corpo.idPlanejamento}`);
    }
}