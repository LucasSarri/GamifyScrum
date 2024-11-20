import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @OneToOne(() => Planejamento, planejamento => planejamento.turma)
    planejamento: Planejamento;
}