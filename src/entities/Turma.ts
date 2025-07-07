import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Planejamento } from "./Planejamento";

@Entity("turma")
export class Turma {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { length: 50})
    nome_professor: string;

    @Column("varchar", { length: 50})
    email_professor: string;

    @Column("varchar", { length: 50})
    nome_instituicao: string;

    @Column("varchar", { length: 50})
    nome_disciplina: string;

    @Column("varchar", { length: 50})
    identificacao_turma: string;

    @Column("varchar", { length: 50})
    tipo_atividade: string;

    @Column()
    qtd_participantes: number;

    @Column("varchar", { length: 50})
    duracao_prevista: string;

    @Column("varchar", { length: 50})
    localizacao_atividade: string;

    @OneToMany(() => Planejamento, planejamento => planejamento.turma)
    planejamentos: Planejamento[];
}