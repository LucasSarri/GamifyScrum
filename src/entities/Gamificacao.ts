import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Agrupamento_Gamificacao } from "./Agrupamento_Gamificacao";

@Entity("gamificacao")
export class Gamificacao {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { length: 50})
    descricao: string;

    @Column({ default: false})
    ativo: boolean;

    @ManyToOne(() => Agrupamento_Gamificacao, ag_gamificacao => ag_gamificacao.elementos_gamificacao)
    ag_gamificacao: Agrupamento_Gamificacao;
}