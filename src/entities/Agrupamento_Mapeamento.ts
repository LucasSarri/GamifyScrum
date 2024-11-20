import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Mapeamento } from "./Mapeamento";

@Entity("agrupamento_mapeamento")
export class Agrupamento_Mapeamento {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { length: 50})
    descricao: string;

    @OneToMany(() => Mapeamento, mapeamentos => mapeamentos.ag_mapeamento)
    mapeamentos: Mapeamento[];
}