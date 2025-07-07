import { Request, Response } from "express";
import { planejamentoRepository } from "../repositories/planejamentoRepository";
import { perfilJogadorRepository } from "../repositories/perfilJogadoRepository";

export class PerfilJogadorController 
{
    async RenderCenariosAtuais (req: Request, res: Response) 
    {
        const perfil_jogador = await perfilJogadorRepository.find();
        const parametro = req.params.parametro;
        return res.status(200).render('formPerfilJogador', {perfil_jogador: perfil_jogador, planejamento: parametro});
    }

    async addPerfilJogadorPlanejamento (req: Request, res: Response) 
    {
        const corpo = req.body;
 
        const planejamento = await planejamentoRepository.findOne({
            where: {id: corpo.idPlanejamento},
            relations: ['perfis_jogador']
        });

        if (!planejamento) 
        {
            throw new Error(`Planejamento com ID ${corpo.idPlanejamento} não encontrado.`);
        }

        const perfil_jogador = await perfilJogadorRepository.findByIds(corpo.ativo);

        if (perfil_jogador.length === 0) 
        {
            throw new Error('Nenhum dos cenários fornecidos foi encontrado.');
        }

        const perfisExistentes = await planejamento.perfis_jogador;

        perfil_jogador.forEach((perfil) => {
            if (!perfisExistentes.some((c) => c.id === perfil.id)) {
                perfisExistentes.push(perfil);
            }
        });

        await planejamentoRepository.save(planejamento);
        
        return res.status(200).redirect(`/elementos_gamificacao/${corpo.idPlanejamento}`);
    }
}