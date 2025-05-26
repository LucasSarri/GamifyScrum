import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Agrupamento_Mapeamento } from "./Agrupamento_Mapeamento";
import { Planejamento } from "./Planejamento";

@Entity("mapeamento")
export class Mapeamento {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { length: 50})
    descricao: string;

    @Column({ default: false})
    ativo: boolean;

    @ManyToOne(() => Agrupamento_Mapeamento, ag_mapeamento => ag_mapeamento.mapeamentos)
    ag_mapeamento: Agrupamento_Mapeamento;

    @ManyToMany(() => Planejamento, planejamento => planejamento.mapeamentos)
    planejamentos: Planejamento[];
}