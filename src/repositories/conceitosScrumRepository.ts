import { AppDataSource } from "../data-source";
import { Scrum } from "../entities/Scrum";

export const conceitosScrumRepository = AppDataSource.getRepository(Scrum);