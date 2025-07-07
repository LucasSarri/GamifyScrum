import { Request, Response } from "express";
import { planejamentoRepository } from "../repositories/planejamentoRepository";

export class PlanejamentoController {
    async RenderPlanejamento (req: Request, res: Response) {
        const parametro = Number(req.params.parametro);

        const planejamento = await planejamentoRepository.findOneBy({id: parametro})

        if (!planejamento)
        {
            return res.status(404).send("Planejamento não encontrado");
        }

        const turma = await planejamento.turma;
        const scrums = await planejamento.scrums;
        const regras = await planejamento.regras;
        const recompensas = await planejamento.recompensas;
        const elementos_gamificacao = await planejamento.elementos_gamificacao;
        const perfis_jogador = await planejamento.perfis_jogador;
        const cenarios_atuais = await planejamento.cenarios_atuais;
        const cenarios_desejados = await planejamento.cenarios_desejados;
        const acoes_recompensadas = await planejamento.acoes_recompensadas;
        const mapeamentos = await planejamento.mapeamentos;

        return res.status(200).render(`planejamento`, {planejamento, turma, scrums, regras, recompensas, elementos_gamificacao, perfis_jogador, cenarios_atuais, cenarios_desejados, acoes_recompensadas, mapeamentos});
    }
}