import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1743028971058 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`insert into perfil_jogador (descricao) values ('Jogador Competitivo'), ('Jogador Cooperativo'), ('Jogador Imersivo'), ('Jogador de Realização'), ('Jogador Social')`);
        await queryRunner.query(`insert into agrupamento_gamificacao  (descricao) values ('Desempenho'), ('Ecológico'), ('Social'), ('Pessoal'), ('Ficcional')`);
        await queryRunner.query(`insert into gamificacao  (descricao, "agGamificacaoId") values ('Pontuação',(select id from agrupamento_gamificacao where descricao = 'Desempenho')), ('Progressão',(select id from agrupamento_gamificacao where descricao = 'Desempenho')), ('Nível',(select id from agrupamento_gamificacao where descricao = 'Desempenho')),('Estatística',(select id from agrupamento_gamificacao where descricao = 'Desempenho')),('Reconhecimento',(select id from agrupamento_gamificacao where descricao = 'Desempenho'))`);
        await queryRunner.query(`insert into gamificacao  (descricao, "agGamificacaoId") values ('Chance',(select id from agrupamento_gamificacao where descricao = 'Ecológico')), ('Escolha Imposta',(select id from agrupamento_gamificacao where descricao = 'Ecológico')), ('Economia',(select id from agrupamento_gamificacao where descricao = 'Ecológico')),('Raridade',(select id from agrupamento_gamificacao where descricao = 'Ecológico')),('Pressão Temporal',(select id from agrupamento_gamificacao where descricao = 'Ecológico'))`);
        await queryRunner.query(`insert into gamificacao  (descricao, "agGamificacaoId") values ('Competição',(select id from agrupamento_gamificacao where descricao = 'Social')), ('Cooperação',(select id from agrupamento_gamificacao where descricao = 'Social')), ('Reputação',(select id from agrupamento_gamificacao where descricao = 'Social')),('Pressão Social',(select id from agrupamento_gamificacao where descricao = 'Social'))`);
        await queryRunner.query(`insert into gamificacao  (descricao, "agGamificacaoId") values ('Sensação',(select id from agrupamento_gamificacao where descricao = 'Pessoal')), ('Objetivo',(select id from agrupamento_gamificacao where descricao = 'Pessoal')), ('Quebra-cabeça',(select id from agrupamento_gamificacao where descricao = 'Pessoal')),('Novidade',(select id from agrupamento_gamificacao where descricao = 'Pessoal')),('Renovação',(select id from agrupamento_gamificacao where descricao = 'Pessoal'))`);
        await queryRunner.query(`insert into gamificacao  (descricao, "agGamificacaoId") values ('Narrativa',(select id from agrupamento_gamificacao where descricao = 'Ficcional')), ('Storytelling',(select id from agrupamento_gamificacao where descricao = 'Ficcional'))`);
        await queryRunner.query(`insert into agrupamento_mapeamento (descricao ) values ('Modalidade'), ('Tipos'), ('Geral')`);
        await queryRunner.query(`insert into mapeamento  (descricao, "agMapeamentoId") values ('Presencial',(select id from agrupamento_mapeamento where descricao = 'Modalidade')), ('Online',(select id from agrupamento_mapeamento where descricao = 'Modalidade')), ('Individual',(select id from agrupamento_mapeamento where descricao = 'Modalidade')), ('Em grupo',(select id from agrupamento_mapeamento where descricao = 'Modalidade')), ('Uso de plataformas online',(select id from agrupamento_mapeamento where descricao = 'Modalidade'))`);
        await queryRunner.query(`insert into mapeamento  (descricao, "agMapeamentoId") values ('Formativa',(select id from agrupamento_mapeamento where descricao = 'Tipos')), ('Somativa',(select id from agrupamento_mapeamento where descricao = 'Tipos'))`);
        await queryRunner.query(`insert into mapeamento  (descricao, "agMapeamentoId") values ('Requer equipamentos específicos',(select id from agrupamento_mapeamento where descricao = 'Geral')), ('Foco em projetos reais',(select id from agrupamento_mapeamento where descricao = 'Geral')), ('Níveis de dificuldades progressivos',(select id from agrupamento_mapeamento where descricao = 'Geral'))`);
        await queryRunner.query(``);
        await queryRunner.query(``);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
