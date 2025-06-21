import { Request, Response } from "express";
import { cenarioDesejadoRepository } from "../repositories/cenarioDesejadoRepository";
import { planejamentoRepository } from "../repositories/planejamentoRepository";


export class CenarioDesejadoController {
    async RenderCenariosDesejados (req: Request, res: Response) {
        const cenariosdesejados = await cenarioDesejadoRepository.find();
        const parametro = req.params.parametro;
        return res.status(200).render(`formCenarioDesejado`, {cenariosdesejados, planejamento: parametro});
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

        cenariosDesejados.forEach((cenario) => {
            if (!planejamento.cenarios_desejados.some((c) => c.id === cenario.id)) {
                planejamento.cenarios_desejados.push(cenario);
            }
        });

        await planejamentoRepository.save(planejamento);
        
        return res.status(200).redirect(`/regras/${corpo.idPlanejamento}`);
    }
}