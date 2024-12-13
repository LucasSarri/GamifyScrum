import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1732062371940 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`insert into cenario_atual(descricao) values ('Dificuldade na compreensão dos conceitos do Scrum'), ('Aumentar'), ('Dificuldade de trabalhar em equipe'), ('Falta de motivação'), ('Dificuldade no gerenciamento de tempo'), ('Dificuldade em priorizar tarefas'), ('Dificuldade em aprender novas ferramentas'), ('Falta de habilidades de comunicação'), ('Dificuldade de equilibrar estudo com outras responsabilidades'), ('Dificuldade em gerenciar ansiedade'), ('Dificuldade em lidar com ferramentas de desenvolvimento'), ('Dificuldade de encontrar oportunidades de estágio'), ('Dificuldade em lidar com pressão'), ('Dificuldade de trabalhar com prazos apertados')`);
        await queryRunner.query(`insert into cenario_desejado (descricao) values ('Criar um ambiente de aprendizagem motivador e envolvente'), ('Aumentar a motivação e concentração dos alunos'), ('Desenvolver habilidades cognitivas, sociais e de aprendizagem'), ('Estimular a criatividade e a inovação'), ('Aumentar a retenção de conhecimentos adquiridos'), ('Promover a participação ativa dos alunos'), ('Melhorar a colaboração e o trabalho em equipe'), ('Incentivar a aplicação prática dos conhecimentos')`);
        await queryRunner.query(`insert into agrupamento_scrum(descricao) values ('Papéis'), ('Eventos'), ('Artefatos')`);
        await queryRunner.query(`insert into scrum (descricao, "idAgScrumId") values ('Scrum Master', (select id from agrupamento_scrum where descricao = 'Papéis')), ('Product Owner', (select id from agrupamento_scrum where descricao = 'Papéis')), ('Development Team', (select id from agrupamento_scrum where descricao = 'Papéis')), ('Sprint', (select id from agrupamento_scrum where descricao = 'Eventos')), ('Sprint Planning', (select id from agrupamento_scrum where descricao = 'Eventos')), ('Daily Scrum', (select id from agrupamento_scrum where descricao = 'Eventos')), ('Sprint Review', (select id from agrupamento_scrum where descricao = 'Eventos')), ('Sprint Retrospective', (select id from agrupamento_scrum where descricao = 'Eventos')), ('Product Backlog', (select id from agrupamento_scrum where descricao = 'Artefatos')), ('Sprint Backlog', (select id from agrupamento_scrum where descricao = 'Artefatos'))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`delete from cenario_atual where id between 1 AND 13`);
        await queryRunner.query(`delete from cenario_desejado where id between 1 AND 16`);
    }

}
