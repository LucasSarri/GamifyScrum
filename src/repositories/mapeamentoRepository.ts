import { AppDataSource } from "../data-source";
import { Mapeamento } from "../entities/Mapeamento";


export const mapeamentoRepository = AppDataSource.getRepository(Mapeamento);