import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("perfil_jogador")
export class Perfil_Jogador {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", { length: 50})
    descricao: string;

    @Column({ default: false})
    ativo: boolean;
}