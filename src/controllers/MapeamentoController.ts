import { Request, Response } from "express";
import { mapeamentoRepository } from "../repositories/mapeamentoRepository";


export class MapeamentoController {
    async RenderMapeamento (req: Request, res: Response) {
        const parametro = req.params.parametro;
        const mapeamentos = await mapeamentoRepository.createQueryBuilder("mapeamento")
        .innerJoinAndSelect("mapeamento.ag_mapeamento", "ag_mapeamento")
        .getMany();
        
        console.log(mapeamentos);

        //return res.status(200).render(`formElementosGamificacao`, {mapeamentos, planejamento: parametro});
    }

    async addMapeamentoPlanejamento (req: Request, res: Response) {
        /*const corpo = req.body;
 
        const planejamento = await planejamentoRepository.findOne({
            where: {id: corpo.idPlanejamento},
            relations: ['perfis_jogador']
        });

        if (!planejamento) {
            throw new Error(`Planejamento com ID ${corpo.idPlanejamento} não encontrado.`);
        }

        const perfil_jogador = await perfilJogadorRepository.findByIds(corpo.ativo);

        if (perfil_jogador.length === 0) {
            throw new Error('Nenhum dos cenários fornecidos foi encontrado.');
        }

        perfil_jogador.forEach((perfil) => {
            if (!planejamento.perfis_jogador.some((c) => c.id === perfil.id)) {
                planejamento.perfis_jogador.push(perfil);
            }
        });

        await planejamentoRepository.save(planejamento);
        
        return res.status(200).redirect(`/elementos_gamificacao/${corpo.idPlanejamento}`);*/
    }
}