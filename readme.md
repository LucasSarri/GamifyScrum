# 🎮 GamifyScrum

**GamifyScrum** é uma ferramenta para **criação de planejamentos de atividades gamificadas**, voltada ao uso de conceitos de **Scrum** e **Gamificação** em ambientes educacionais ou corporativos.  
O sistema auxilia o usuário a estruturar atividades de forma dinâmica, com foco na motivação e engajamento dos participantes.

---

## 🚀 Tecnologias Utilizadas

- **Node.js**
- **TypeScript**
- **Express**
- **TypeORM**
- **PostgreSQL**
- **Docker**

---

## ⚙️ Como Executar o Projeto

### 1. Clone o repositório
```bash
git clone https://github.com/LucasSarri/GamifyScrum.git
cd GamifyScrum
```

### Instale as dependências
```bash
npm install
```

### Configure o arquivo .env
Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
DB_HOST=localhost
DB_PORT=5433
DB_USER=postgres
DB_PASS=gamificator
DB_NAME=postgres
PORT=3000


### Crie o container Docker do banco de dados
```bash
sudo docker run --name gamificator -e POSTGRES_PASSWORD=gamificator -p 5433:5432 -d postgres
```

### Execute as migrations
```bash
npm run migration:run
```

### Inicie o servidor em modo desenvolvimento
```bash
npm run dev
```

## 📡 Endpoints Principais

| Rota                     | Descrição                                                     |
| ------------------------ | ------------------------------------------------------------- |
| `/turma`                 | Cadastro de turmas                                            |
| `/cenario_atual`         | Seleção das opções do cenário atual da turma                  |
| `/cenario_desejado`      | Seleção das opções do cenário desejado                        |
| `/regras`                | Escolha das regras para o planejamento                        |
| `/conceitos_scrum`       | Seleção dos conceitos Scrum a serem abordados                 |
| `/perfil_scrum`          | Definição dos perfis de jogador que participarão da atividade |
| `/elementos_gamificação` | Seleção dos elementos de gamificação a serem utilizados       |
| `/mapeamento`            | Informações específicas da atividade                          |
| `/recompensa`            | Seleção das recompensas oferecidas                            |
| `/acoesrecompensadas`    | Definição das ações que geram recompensas                     |
| `/planejamento`          | Geração final do planejamento gamificado                      |

## 🧩 Estrutura do Projeto
src/
├── controllers/     # Controladores responsáveis pelas requisições HTTP
├── services/        # Regras de negócio e lógica principal
├── entities/        # Entidades e mapeamento com o banco de dados (TypeORM)
├── repositories/    # Consultas personalizadas ao banco
├── routes/          # Definição das rotas da aplicação
├── migrations/      # Controle de versão do banco de dados
└── utils/           # Funções auxiliares e helpers
## 👨‍💻 Autor

Lucas Sarri
🔗 [LinkedIn](https://www.linkedin.com/in/lucas-sarri-de-mello-a54776206/)
💻 [GitHub](https://github.com/LucasSarri)