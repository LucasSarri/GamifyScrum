import { Request, Response } from "express";
import { cenarioDesejadoRepository } from "../repositories/cenarioDesejadoRepository";
import { planejamentoRepository } from "../repositories/planejamentoRepository";
import { conceitosScrumRepository } from "../repositories/conceitosScrumRepository";


export class ConceitosScrumController {
    async RenderConceitosScrum (req: Request, res: Response) {
        const parametro = req.params.parametro;

        const conceitos_scrum = await conceitosScrumRepository
        .createQueryBuilder("scrum")
        .innerJoinAndSelect("scrum.idAgScrum", "ag_scrum")
        .getMany();

        return res.status(200).render(`formConceitosScrum`, {conceitos_scrum, planejamento: parametro});
    }

    async addConceitosScrumPlanejamento (req: Request, res: Response) {
        const corpo = req.body;

        const planejamento = await planejamentoRepository.findOne({
            where: {id: corpo.idPlanejamento},
            relations: ['scrums']
        });

        if (!planejamento) {
            throw new Error(`Planejamento com ID ${corpo.idPlanejamento} não encontrado.`);
        }

        const scrums = await conceitosScrumRepository.findByIds(corpo.ativo);

        if (scrums.length === 0) {
            throw new Error('Nenhum dos cenários fornecidos foi encontrado.');
        }

        scrums.forEach((scrum) => {
            if (!planejamento.scrums.some((c) => c.id === scrum.id)) {
                planejamento.scrums.push(scrum);
            }
        });

        await planejamentoRepository.save(planejamento);
    
        return res.status(200).redirect(`/perfil_scrum/${corpo.idPlanejamento}`);
    }
}