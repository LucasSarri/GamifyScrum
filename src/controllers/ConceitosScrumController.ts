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

        console.log(conceitos_scrum);

        return res.status(200).render(`formConceitosScrum`);
    }

    async addConceitosScrumPlanejamento (req: Request, res: Response) {
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
        
        return res.status(200).redirect(`/cenario_desejado/${corpo.idPlanejamento}`);
    }
}