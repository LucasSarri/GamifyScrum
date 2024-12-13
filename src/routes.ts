import { Router } from "express";
import { TurmaController } from "./controllers/TurmaController";
import { IndexController } from "./controllers/IndexController";
import { CenarioAtualController } from "./controllers/CenarioAtualController";
import { CenarioDesejadoController } from "./controllers/CenarioDesejadoController";
import { ConceitosScrumController } from "./controllers/ConceitosScrumController";

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

export default routes;