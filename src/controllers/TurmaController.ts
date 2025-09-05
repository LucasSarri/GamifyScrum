import { Request, Response } from "express";
import { turmaRepository } from "../repositories/turmaRepository";
import { planejamentoRepository } from "../repositories/planejamentoRepository";
import { semanasRepository } from "../repositories/semanasRepository";

export class TurmaController 
{
    async RenderCreateTurma (req: Request, res: Response) 
    {
        const parametro = req.params.parametro;
        return res.status(200).render('formTurma', {planejamento: parametro});
    }

    async CreateTurma (req: Request, res: Response) 
    {
        const parametro = req.params.parametro;
        const turma = req.body;
        
        if (!parametro || !turma)
        {
            return res.status(400).json('A turma não pode ser cadastrada por falta de informações');
        }

        const planejamento = await planejamentoRepository.findOneBy({
            id: turma.idPlanejamento,
        });

        if (planejamento)
        {
            const newTurma = await turmaRepository.create({
                nome_professor: turma.nome_professor,
                email_professor: turma.email_professor,
                nome_instituicao: turma.nome_instituicao,
                nome_disciplina: turma.nome_disciplina,
                identificacao_turma: turma.identificacao_turma,
                tipo_atividade: turma.tipo_atividade,
                qtd_participantes: turma.qtd_participantes,
                localizacao_atividade: turma.localizacao_atividade,
                duracao_prevista: turma.duracao_prevista,
                planejamentos: [planejamento]
            });

            if(!turma.duracao_prevista || isNaN(turma.duracao_prevista))
            {
                return res.status(400)
            }

            const semanasRepo = semanasRepository;

            const semanas = Array.from({ length: Number(turma.duracao_prevista) }, (_, i) =>
                semanasRepo.create({ planejamento: planejamento})
            );

            await semanasRepo.save(semanas);

            await turmaRepository.save(newTurma);

            return res.status(200).redirect(`/cenario_atual/${planejamento.id}`);
        }
    }
}