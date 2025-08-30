import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Planejamento } from "./Planejamento";
import { Agrupamento_Scrum } from "./Agrupamento_Scrum";
import { Semana } from "./Semana";

@Entity("scrum")
export class Scrum {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { length: 50})
    descricao: string;

    @Column({ default: false})
    ativo: boolean;

    @ManyToOne(() => Agrupamento_Scrum, ag_scrum => ag_scrum.scrums)
    idAgScrum: Scrum;

    @ManyToOne(() => Semana, semana => semana.eventos)
    semana: Semana;
}