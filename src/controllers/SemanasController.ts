import { Request, Response } from "express";
import { semanasRepository } from "../repositories/semanasRepository";
import { conceitosScrumRepository } from "../repositories/conceitosScrumRepository";


export class SemanasController {
    async RenderSemanas (req: Request, res: Response) 
    {
        const parametro = req.params.parametro;

        const semanas = await semanasRepository.find({
            where: { planejamento: {id: Number(parametro)}}
        });

        const eventos = conceitosScrumRepository

        return res.status(200).render(`cronograma`, {semanas, planejamento: parametro});
    }

    async addEventosSemana (req: Request, res: Response) 
    {
        const id = req.params.parametro;
        console.log(id)
        //const { eventos } = req.body;
        console.log(req.body)

        /*const semanaRepo = semanasRepository;
        const eventoRepo = conceitosScrumRepository;

        const semana = await semanaRepo.findOne({
            where: { id: Number(id) }
        });

        console.log(semana)

        if (!semana) 
        {
            return res.status(404).json({message: "Semana não encontrada.",});
        }

        // cria os novos eventos vinculados à semana
        const novosEventos = eventos.map((tipo: string) =>
            eventoRepo.create({ semana })
        );

        console.log(novosEventos);
        */
    }
}