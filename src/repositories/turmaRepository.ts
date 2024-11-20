import { AppDataSource } from "../data-source";
import { Turma } from "../entities/Turma";

export const turmaRepository = AppDataSource.getRepository(Turma);