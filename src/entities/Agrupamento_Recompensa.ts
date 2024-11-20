import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Recompensa } from "./Recompensa";

@Entity("agrupamento_recompensa")
export class Agrupamento_Recompensa {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { length: 50})
    descricao: string;

    @OneToMany(() => Recompensa, recompensa => recompensa.ag_recompensa)
    recompensas: Recompensa[];
}