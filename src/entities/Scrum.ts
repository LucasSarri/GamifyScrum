import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Agrupamento_Scrum } from "./Agrupamento_Scrum";
import { Semana } from "./Semana";
import { Planejamento } from "./Planejamento";

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

    @ManyToMany(() => Planejamento, planejamento => planejamento.scrums)
    planejamentos: Planejamento[];
}