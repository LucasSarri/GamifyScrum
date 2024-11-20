import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Scrum } from "./Scrum";

@Entity("agrupamento_scrum")
export class Agrupamento_Scrum {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { length: 50})
    descricao: string;

    @OneToMany(() => Scrum, scrums => scrums.idAgScrum)
    scrums: Scrum[];
}