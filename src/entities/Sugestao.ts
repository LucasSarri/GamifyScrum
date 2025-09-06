import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("sugestao")
export class Sugestao {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { length: 250})
    origem_tipo: string;

    @Column()
    origem_id: number;

    @Column()
    destino_tipo: string;

    @Column("varchar", { length: 250})
    destino_id: number;

    @Column({ default: false})
    ativo: boolean;
}