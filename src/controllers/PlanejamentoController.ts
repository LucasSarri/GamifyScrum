import { Request, Response } from "express";
import { planejamentoRepository } from "../repositories/planejamentoRepository";

export class PlanejamentoController {
    async RenderPlanejamento (req: Request, res: Response) {
        const parametro = req.params.parametro;

        /*const planejamento = await planejamentoRepository.createQueryBuilder("planejamento")
        .innerJoinAndSelect("planejamento.turma", "turma")
        .innerJoinAndSelect("planejamento.scrums", "scrums")
        .innerJoinAndSelect("planejamento.regras", "regras")
        .innerJoinAndSelect("planejamento.recompensas", "recompensas")
        .innerJoinAndSelect("planejamento.elementos_gamificacao", "elementos_gamificacao")
        .innerJoinAndSelect("planejamento.perfis_jogador", "perfis_jogador")
        .innerJoinAndSelect("planejamento.cenarios_atuais", "cenarios_atuais")
        .innerJoinAndSelect("planejamento.cenarios_desejados", "cenarios_desejados")
        .innerJoinAndSelect("planejamento.acoes_recompensadas", "acoes_recompensadas")
        .innerJoinAndSelect("planejamento.mapeamentos", "mapeamentos")
        .andWhere(`planejamento.id = ${parametro}`)
        .getOne();*/

        const planejamento = await planejamentoRepository.findOne({
            where: {id: Number(parametro)},
            relations:[
                "turma",
                "scrums",
                "regras",
                "recompensas",
                "elementos_gamificacao",
                "perfis_jogador",
                "cenarios_atuais",
                "cenarios_desejados",
                "acoes_recompensadas",
                "mapeamentos"
            ]
        });

        console.log(JSON.stringify(planejamento, null, 2).length);

        return res.status(200).render(`planejamento`, {planejamento});
    }
}