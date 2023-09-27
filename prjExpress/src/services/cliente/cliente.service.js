import connection from "../../config/db.js";

class ClienteService {

  async create(payload) {
    try {
      await connection.query(`insert into clientes (
        nome,
        sobrenome,
        email,
        endereco_rua,
        endereco_numero,
        endereco_complemento,
        endereco_bairro,
        endereco_cidade,
        endereco_estado,
        endereco_cep) 
        values
        ('${payload.nome}',
         '${payload.sobrenome}', 
         '${payload.email}',
         '${payload.enderecoRua}', 
         '${payload.enderecoNumero}', 
         '${payload.enderecoComplemento}',
         '${payload.enderecoBairro}',
         '${payload.enderecoCidade}',
         '${payload.enderecoEstado}',
         '${payload.enderecoCep}'      
         )`);
      return true

    } catch (error) {
      console.log(error);
      throw new Error();
    }

  }   


}


export default new ClienteService();