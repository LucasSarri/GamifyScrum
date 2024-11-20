# Configuração Inicial

1. Executar a instalação das depenência
    Basta rodar o comando: npm install

2. Criar arquivo .env
    É necessário realizar a cópia do arquivo env-bkp, e renomear a cópia para .env

3. Executar a criação do container Docker
    Basta rodar o comando: docker run --name gamificator -e POSTGRES_PASSWORD=gamificator -p 5433:5432 -d postgres
    
4. Rodar criação do banco de dados
    Basta rodar o comando: typeorm-ts-node-commonjs -d ./src/data-source.ts migration:run

# Como rodar o projeto?

1. Executar o container docker
    Localizar qual é o id do container, e rodar o comando: docker start <id do container>

2. Rodar o projeto
    Executar o comando; npm run dev

