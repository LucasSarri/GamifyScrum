import { AppDataSource } from "../data-source";
import { Planejamento } from "../entities/Planejamento";

export const planejamentoRepository = AppDataSource.getRepository(Planejamento);