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