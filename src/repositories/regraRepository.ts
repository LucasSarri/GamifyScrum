import { AppDataSource } from "../data-source";
import { Regra } from "../entities/Regra";

export const regraRepository = AppDataSource.getRepository(Regra);