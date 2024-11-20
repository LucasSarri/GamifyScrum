import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Planejamento } from "./Planejamento";

@Entity("cenario_atual")
export class Cenario_Atual {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { length: 100})
    descricao: string;

    @Column({ default: false})
    ativo: boolean;

    @ManyToMany(() => Planejamento, (planejamento) => planejamento.cenarios_atuais)
    planejamentos: Planejamento[];
}