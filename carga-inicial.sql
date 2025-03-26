insert into cenario_atual(descricao) values ('Dificuldade na compreensão dos conceitos do Scrum'), 
('Aumentar'), ('Dificuldade de trabalhar em equipe'), ('Falta de motivação'), 
('Dificuldade no gerenciamento de tempo'), ('Dificuldade em priorizar tarefas'), ('Dificuldade em aprender novas ferramentas'), 
('Falta de habilidades de comunicação'), ('Dificuldade de equilibrar estudo com outras responsabilidades'), ('Dificuldade em gerenciar ansiedade'), 
('Dificuldade em lidar com ferramentas de desenvolvimento'), ('Dificuldade de encontrar oportunidades de estágio'), 
('Dificuldade em lidar com pressão'), ('Dificuldade de trabalhar com prazos apertados');

insert into cenario_desejado (descricao) values ('Criar um ambiente de aprendizagem motivador e envolvente'), 
('Aumentar a motivação e concentração dos alunos'), ('Desenvolver habilidades cognitivas, sociais e de aprendizagem'), 
('Estimular a criatividade e a inovação'), ('Aumentar a retenção de conhecimentos adquiridos'), ('Promover a participação ativa dos alunos'), 
('Melhorar a colaboração e o trabalho em equipe'), ('Incentivar a aplicação prática dos conhecimentos');

insert into agrupamento_scrum(descricao) values ('Papéis'), ('Eventos'), ('Artefatos');

insert into scrum (descricao, "idAgScrumId") values ('Scrum Master', (select id from agrupamento_scrum where descricao = 'Papéis')), ('Product Owner', (select id from agrupamento_scrum where descricao = 'Papéis')),
('Development Team', (select id from agrupamento_scrum where descricao = 'Papéis')), ('Sprint', (select id from agrupamento_scrum where descricao = 'Eventos')), ('Sprint Planning', (select id from agrupamento_scrum where descricao = 'Eventos')),
('Daily Scrum', (select id from agrupamento_scrum where descricao = 'Eventos')), ('Sprint Review', (select id from agrupamento_scrum where descricao = 'Eventos')), ('Sprint Retrospective', (select id from agrupamento_scrum where descricao = 'Eventos')),
('Product Backlog', (select id from agrupamento_scrum where descricao = 'Artefatos')), ('Sprint Backlog', (select id from agrupamento_scrum where descricao = 'Artefatos'));

insert into perfil_jogador (descricao) values ('Jogador Competitivo'), ('Jogador Cooperativo'), ('Jogador Imersivo'), ('Jogador de Realização'), ('Jogador Social');

insert into agrupamento_gamificacao  (descricao) values ('Desempenho'), ('Ecológico'), ('Social'), ('Pessoal'), ('Ficcional');

insert into gamificacao  (descricao, "agGamificacaoId") values ('Pontuação',(select id from agrupamento_gamificacao where descricao = 'Desempenho')), ('Progressão',(select id from agrupamento_gamificacao where descricao = 'Desempenho')), ('Nível',(select id from agrupamento_gamificacao where descricao = 'Desempenho')),('Estatística',(select id from agrupamento_gamificacao where descricao = 'Desempenho')),('Reconhecimento',(select id from agrupamento_gamificacao where descricao = 'Desempenho'));
insert into gamificacao  (descricao, "agGamificacaoId") values ('Chance',(select id from agrupamento_gamificacao where descricao = 'Ecológico')), ('Escolha Imposta',(select id from agrupamento_gamificacao where descricao = 'Ecológico')), ('Economia',(select id from agrupamento_gamificacao where descricao = 'Ecológico')),('Raridade',(select id from agrupamento_gamificacao where descricao = 'Ecológico')),('Pressão Temporal',(select id from agrupamento_gamificacao where descricao = 'Ecológico'));
insert into gamificacao  (descricao, "agGamificacaoId") values ('Competição',(select id from agrupamento_gamificacao where descricao = 'Social')), ('Cooperação',(select id from agrupamento_gamificacao where descricao = 'Social')), ('Reputação',(select id from agrupamento_gamificacao where descricao = 'Social')),('Pressão Social',(select id from agrupamento_gamificacao where descricao = 'Social'));
insert into gamificacao  (descricao, "agGamificacaoId") values ('Sensação',(select id from agrupamento_gamificacao where descricao = 'Pessoal')), ('Objetivo',(select id from agrupamento_gamificacao where descricao = 'Pessoal')), ('Quebra-cabeça',(select id from agrupamento_gamificacao where descricao = 'Pessoal')),('Novidade',(select id from agrupamento_gamificacao where descricao = 'Pessoal')),('Renovação',(select id from agrupamento_gamificacao where descricao = 'Pessoal'));
insert into gamificacao  (descricao, "agGamificacaoId") values ('Narrativa',(select id from agrupamento_gamificacao where descricao = 'Ficcional')), ('Storytelling',(select id from agrupamento_gamificacao where descricao = 'Ficcional'));

insert into agrupamento_mapeamento (descricao ) values ('Modalidade'), ('Tipos'), ('Geral');

insert into mapeamento  (descricao, "agMapeamentoId") values ('Formativa',(select id from agrupamento_mapeamento where descricao = 'Tipos')), ('Somativa',(select id from agrupamento_mapeamento where descricao = 'Tipos'));

insert into mapeamento  (descricao, "agMapeamentoId") values ('Requer equipamentos específicos',(select id from agrupamento_mapeamento where descricao = 'Geral')), ('Foco em projetos reais',(select id from agrupamento_mapeamento where descricao = 'Geral')), ('Níveis de dificuldades progressivos',(select id from agrupamento_mapeamento where descricao = 'Geral'));
