import { AppDataSource } from "../data-source";
import { Acao_Recompensada } from "../entities/Acao_Recompensada";

export const acoesRecompensadasRepository = AppDataSource.getRepository(Acao_Recompensada);