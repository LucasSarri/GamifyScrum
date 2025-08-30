import { AppDataSource } from "../data-source";
import { Semana } from "../entities/Semana";


export const semanasRepository = AppDataSource.getRepository(Semana);