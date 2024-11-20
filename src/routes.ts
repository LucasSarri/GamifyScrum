import { Router } from "express";
import { TurmaController } from "./controllers/TurmaController";
import { IndexController } from "./controllers/IndexController";
import { CenarioAtualController } from "./controllers/CenarioAtualController";
import { CenarioDesejadoController } from "./controllers/CenarioDesejadoController";

const routes = Router();

routes.get("/", new IndexController().RenderIndex);

routes.get("/turma/:parametro", new TurmaController().RenderCreateTurma);
routes.post("/turma/:parametro", new TurmaController().CreateTurma);

routes.get("/cenario_atual/:parametro", new CenarioAtualController().RenderCenariosAtuais);
routes.post("/add_cenario_atual", new CenarioAtualController().addCenarioAtualPlanejamento);

routes.get("/cenario_desejado/:parametro", new CenarioDesejadoController().RenderCenariosDesejados);
routes.post("/cenario_desejado", new CenarioDesejadoController().addCenarioDesejadoPlanejamento);

export default routes;