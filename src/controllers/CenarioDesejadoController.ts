import { Request, Response } from "express";
import { cenarioDesejadoRepository } from "../repositories/cenarioDesejadoRepository";


export class CenarioDesejadoController {
    async RenderCenariosDesejados (req: Request, res: Response) {
        const cenariosdesejados = await cenarioDesejadoRepository.find();
        const parametro = req.params.parametro;
        console.log(cenariosdesejados);
        console.log(parametro)
        //return res.status(200).render(`/cenario_desejado/${parametro}`, {cenariosatuais: cenariosdesejados, planejamento: parametro});
    }

    /*async createCenarioDesejado (req: Request, res: Response) {
        const cenarioAtual = req.body;
        const parametro = req.params.parametro;

        if(!cenarioAtual || !parametro) {
            return res.status(400).json('O cenário atual não foi cadastrado devido a falta de informação da turma');
        }

        try {
            const newCenarioAtual = cenarioAtualRepository.create(cenarioAtual);
            await cenarioAtualRepository.save(newCenarioAtual);
            return res.status(201);
        } catch (error) {
            console.log(error);
            return res.status(400).json('O cenário atual não foi cadastrado devido a um erro interno');
        }
    }*/

    async addCenarioDesejadoPlanejamento (planejamentoId: number, req: Request, res: Response) {
        console.log("Parametro (addCenarioPlanejamento):", req.params.parametro);
        const cenarios_atuais = req.body;
        const parametro = req.params.parametro;
    }
}