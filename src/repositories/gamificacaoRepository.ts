import { AppDataSource } from "../data-source";
import { Gamificacao } from "../entities/Gamificacao";

export const gamificacaoRepository = AppDataSource.getRepository(Gamificacao);