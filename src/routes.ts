import { Router } from "express";
import { TurmaController } from "./controllers/TurmaController";
import { IndexController } from "./controllers/IndexController";
import { CenarioAtualController } from "./controllers/CenarioAtualController";
import { CenarioDesejadoController } from "./controllers/CenarioDesejadoController";
import { ConceitosScrumController } from "./controllers/ConceitosScrumController";
import { PerfilJogadorController } from "./controllers/PerfilJogadorController";
import { GamificacaoController } from "./controllers/GamificacaoController";
import { MapeamentoController } from "./controllers/MapeamentoController";
import { RecompensasController } from "./controllers/RecompensasController";

const routes = Router();

routes.get("/", new IndexController().RenderIndex);

routes.get("/turma/:parametro", new TurmaController().RenderCreateTurma);
routes.post("/turma/:parametro", new TurmaController().CreateTurma);

routes.get("/cenario_atual/:parametro", new CenarioAtualController().RenderCenariosAtuais);
routes.post("/add_cenario_atual", new CenarioAtualController().addCenarioAtualPlanejamento);

routes.get("/cenario_desejado/:parametro", new CenarioDesejadoController().RenderCenariosDesejados);
routes.post("/cenario_desejado", new CenarioDesejadoController().addCenarioDesejadoPlanejamento);

routes.get("/conceito_scrum/:parametro", new ConceitosScrumController().RenderConceitosScrum);
routes.post("/conceito_scrum", new ConceitosScrumController().addConceitosScrumPlanejamento);

routes.get("/perfil_scrum/:parametro", new PerfilJogadorController().RenderCenariosAtuais);
routes.post("/perfil_scrum", new PerfilJogadorController().addPerfilJogadorPlanejamento);

routes.get("/elementos_gamificacao/:parametro", new GamificacaoController().RenderGamificacao);
routes.post("/elementos_gamificacao", new GamificacaoController().addGamificacaoPlanejamento);

routes.get("/mapeamento/:parametro", new MapeamentoController().RenderMapeamento);
routes.post("/mapeamento", new MapeamentoController().addMapeamentoPlanejamento);

routes.get("/recompensa/:parametro", new RecompensasController().RenderRecompensas);
routes.post("/recompensa", new RecompensasController().addRecompensasPlanejamento);

export default routes;