import { AppDataSource } from "../data-source";
import { Perfil_Jogador } from "../entities/Perfil_Jogador";

export const perfilJogadorRepository = AppDataSource.getRepository(Perfil_Jogador);