import { AppDataSource } from "../data-source";
import { Cenario_Desejado } from "../entities/Cenario_Desejado";

export const cenarioDesejadoRepository = AppDataSource.getRepository(Cenario_Desejado);