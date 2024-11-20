import { AppDataSource } from "../data-source";
import { Cenario_Atual } from "../entities/Cenario_Atual";

export const cenarioAtualRepository = AppDataSource.getRepository(Cenario_Atual);