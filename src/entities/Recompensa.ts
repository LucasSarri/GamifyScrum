import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Agrupamento_Recompensa } from "./Agrupamento_Recompensa";

@Entity("recompensa")
export class Recompensa {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { length: 50})
    descricao: string;

    @Column({ default: false})
    ativo: boolean;

    //() => Agrupamento_Scrum, ag_scrum => ag_scrum.scrums
    @ManyToOne(() => Agrupamento_Recompensa, ag_recompensa => ag_recompensa.recompensas)
    ag_recompensa: Agrupamento_Recompensa;
}