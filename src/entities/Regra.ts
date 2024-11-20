import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("regra")
export class Regra {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { length: 50})
    descricao: string;

    @Column({ default: false})
    ativo: boolean;
}