import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Turma } from "./Turma";
import { Scrum } from "./Scrum";
import { Regra } from "./Regra";
import { Perfil_Jogador } from "./Perfil_Jogador";
import { Cenario_Atual } from "./Cenario_Atual";
import { Cenario_Desejado } from "./Cenario_Desejado";
import { Acao_Recompensada } from "./Acao_Recompensada";
import { Recompensa } from "./Recompensa";
import { Gamificacao } from "./Gamificacao";
import { Mapeamento } from "./Mapeamento";

@Entity("planejamento")
export class Planejamento {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { length: 50, nullable: true})
    descricao: string;

    @Column({ default: false, nullable: true })
    ativo: boolean;

    @OneToOne(() => Turma)
    @JoinColumn()
    turma: Turma;

    @ManyToMany(() => Scrum)
    @JoinTable()
    scrums: Scrum[];

    @ManyToMany(() => Regra)
    @JoinTable()
    regras: Regra[];

    @ManyToMany(() => Recompensa)
    @JoinTable()
    recompensas: Recompensa[];

    @ManyToMany(() => Gamificacao)
    @JoinTable()
    elementos_gamificacao: Gamificacao[];

    @ManyToMany(() => Perfil_Jogador)
    @JoinTable()
    perfis_jogador: Perfil_Jogador[];

    @ManyToMany(() => Cenario_Atual, (cenarioAtual) => cenarioAtual.planejamentos)
    @JoinTable()
    cenarios_atuais: Cenario_Atual[];

    @ManyToMany(() => Cenario_Desejado)
    @JoinTable()
    cenarios_desejados: Cenario_Desejado[];

    @ManyToMany(() => Acao_Recompensada)
    @JoinTable()
    acoes_recompensadas: Acao_Recompensada[];

    @ManyToMany(() => Mapeamento, planejamento_mapeamentos => planejamento_mapeamentos.planejamentos)
    @JoinTable()
    mapeamentos: Mapeamento[];
}