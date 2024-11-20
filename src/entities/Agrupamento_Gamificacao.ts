import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Gamificacao } from "./Gamificacao";

@Entity("agrupamento_gamificacao")
export class Agrupamento_Gamificacao {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { length: 50})
    descricao: string;

    @OneToMany(() => Gamificacao, gamificacao => gamificacao.ag_gamificacao)
    elementos_gamificacao: Gamificacao[];
}