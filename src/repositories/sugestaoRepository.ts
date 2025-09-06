import { AppDataSource } from "../data-source";
import { Sugestao } from "../entities/Sugestao";

export const sugestaoRepository = AppDataSource.getRepository(Sugestao);