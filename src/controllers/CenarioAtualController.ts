import { Request, Response } from "express";
import { cenarioAtualRepository } from "../repositories/cenarioAtualRepository";
import { planejamentoRepository } from "../repositories/planejamentoRepository";

export class CenarioAtualController {
    async RenderCenariosAtuais (req: Request, res: Response) {
        const cenariosatuais = await cenarioAtualRepository.find();
        const parametro = req.params.parametro;
        return res.status(200).render('formCenarioAtual', {cenariosatuais: cenariosatuais, planejamento: parametro});
    }

    async addCenarioAtualPlanejamento (req: Request, res: Response) {
        const corpo = req.body;

        const planejamento = await planejamentoRepository.findOne({
            where: {id: corpo.idPlanejamento},
            relations: ['cenarios_atuais']
        });

        if (!planejamento) {
            throw new Error(`Planejamento com ID ${corpo.idPlanejamento} não encontrado.`);
        }

        const cenariosAtuais = await cenarioAtualRepository.findByIds(corpo.ativo);

        if (cenariosAtuais.length === 0) {
            throw new Error('Nenhum dos cenários fornecidos foi encontrado.');
        }

        cenariosAtuais.forEach((cenario) => {
            if (!planejamento.cenarios_atuais.some((c) => c.id === cenario.id)) {
                planejamento.cenarios_atuais.push(cenario);
            }
        });

        await planejamentoRepository.save(planejamento);
        
        return res.status(200).redirect(`/cenario_desejado/${corpo.idPlanejamento}`);
    }
}