import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
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

    @ManyToOne(() => Turma, turma => turma.planejamentos)
    @JoinTable()
    turma: Promise<Turma>;

    @ManyToMany(() => Scrum)
    @JoinTable()
    scrums: Promise<Scrum[]>;

    @ManyToMany(() => Regra)
    @JoinTable()
    regras: Promise<Regra[]>;

    @ManyToMany(() => Recompensa)
    @JoinTable()
    recompensas: Promise<Recompensa[]>;

    @ManyToMany(() => Gamificacao)
    @JoinTable()
    elementos_gamificacao: Promise<Gamificacao[]>;

    @ManyToMany(() => Perfil_Jogador)
    @JoinTable()
    perfis_jogador: Promise<Perfil_Jogador[]>;

    @ManyToMany(() => Cenario_Atual, (cenarioAtual) => cenarioAtual.planejamentos)
    @JoinTable()
    cenarios_atuais: Promise<Cenario_Atual[]>;

    @ManyToMany(() => Cenario_Desejado)
    @JoinTable()
    cenarios_desejados: Promise<Cenario_Desejado[]>;

    @ManyToMany(() => Acao_Recompensada)
    @JoinTable()
    acoes_recompensadas: Promise<Acao_Recompensada[]>;

    @ManyToMany(() => Mapeamento, planejamento_mapeamentos => planejamento_mapeamentos.planejamentos)
    @JoinTable()
    mapeamentos: Promise<Mapeamento[]>;
}