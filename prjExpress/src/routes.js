import {Router} from "express";
import clienteController from "./controllers/cliente/cliente.controller.js";

const routes = Router();

export default routes;

routes.post('/clientes', clienteController.create);
routes.get('/clientes', clienteController.list);