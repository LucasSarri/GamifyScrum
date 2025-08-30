import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Scrum } from "./Scrum";
import { Planejamento } from "./Planejamento";

@Entity()
export class Semana {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Scrum, scrum => scrum.semana)
    eventos: Scrum[];

    @ManyToOne(() => Planejamento, planejamento => planejamento.semanas)
    planejamento: Planejamento;
}