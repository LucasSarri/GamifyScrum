import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Agrupamento_Mapeamento } from "./Agrupamento_Mapeamento";

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
}