import { AppDataSource } from "../data-source";
import { Recompensa } from "../entities/Recompensa";

export const recompensasRepository = AppDataSource.getRepository(Recompensa);