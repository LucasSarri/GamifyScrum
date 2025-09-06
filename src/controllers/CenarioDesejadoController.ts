import { In } from "typeorm";
import { Request, Response } from "express";
import { cenarioDesejadoRepository } from "../repositories/cenarioDesejadoRepository";
import { planejamentoRepository } from "../repositories/planejamentoRepository";
import { cenarioAtualRepository } from "../repositories/cenarioAtualRepository";
import { sugestaoRepository } from "../repositories/sugestaoRepository";


export class CenarioDesejadoController {
    async RenderCenariosDesejados (req: Request, res: Response) {
        const cenariosDesejados = await cenarioDesejadoRepository.find();
        const parametro = req.params.parametro;

        const cenariosAtuais = await cenarioAtualRepository.find({
            where: {planejamentos:{id:Number(parametro)}}
        });

        const idsCenariosAtuais = cenariosAtuais.map(ca => ca.id);

        const sugestoes = await sugestaoRepository.find({
            where: {
                origem_tipo: "CenarioAtual",
                origem_id: In(idsCenariosAtuais),
                destino_tipo: "CenarioDesejado"
            }
        });

        const idsSugestoes = sugestoes.map(s => s.destino_id);

        return res.status(200).render(`formCenarioDesejado`, {cenariosDesejados, idsSugestoes, planejamento: parametro});
    }

    async addCenarioDesejadoPlanejamento (req: Request, res: Response) {
        const corpo = req.body;

        const planejamento = await planejamentoRepository.findOne({
            where: {id: corpo.idPlanejamento},
            relations: ['cenarios_desejados']
        });

        if (!planejamento) {
            throw new Error(`Planejamento com ID ${corpo.idPlanejamento} não encontrado.`);
        }

        const cenariosDesejados = await cenarioDesejadoRepository.findByIds(corpo.ativo);

        if (cenariosDesejados.length === 0) {
            throw new Error('Nenhum dos cenários fornecidos foi encontrado.');
        }

        const cenariosDesejadosExistentes = await planejamento.cenarios_desejados;

        cenariosDesejados.forEach((cenario) => {
            if (!cenariosDesejadosExistentes.some((c) => c.id === cenario.id)) {
                cenariosDesejadosExistentes.push(cenario);
            }
        });

        await planejamentoRepository.save(planejamento);
        
        return res.status(200).redirect(`/regras/${corpo.idPlanejamento}`);
    }
}