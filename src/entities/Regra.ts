import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("regra")
export class Regra {
    @PrimaryGeneratedColumn()
    id: number

    @Column("text")
    descricao: string;

    @Column({ default: false})
    ativo: boolean;
}