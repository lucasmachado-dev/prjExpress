import ClienteService from "../../services/cliente/cliente.service.js";

class ClienteController {
  async create(req, res) {
    try {
      const response = await ClienteService.create(req.body);
        return res.status(201).json(req.body);

    } catch (error) {
      return res.status(500).json({error: 'internal server error'});
    }
  }

  async list(req, res) {
    try {    
      const response = await ClienteService.listar();
      return res.status(200).json(response);
      } catch (error) {
        return res.status(500).json({error: 'internal server error'});
    }
    
  }  

}

export default new ClienteController();