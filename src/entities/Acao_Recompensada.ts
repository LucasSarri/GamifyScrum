import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("acao_recompensada")
export class Acao_Recompensada {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { length: 250})
    descricao: string;

    @Column({ default: false})
    ativo: boolean;
}