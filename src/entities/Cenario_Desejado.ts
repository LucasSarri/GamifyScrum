import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cenario_desejado")
export class Cenario_Desejado {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { length: 100})
    descricao: string;

    @Column({ default: false})
    ativo: boolean;
}