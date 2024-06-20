import UsuarioModel from '../models/Usuario.js';

const usuarioController = {
  cadastrar: async (dados) => {
    console.log(dados);
    try {
      if (!dados) {
        throw new Error('Dados não foram fornecidos.');
      }

      const usuario = await UsuarioModel.create({
        nome: dados.usuario,
        senha: dados.senha,
      });

      return usuario;
    } catch (error) {
      return error;
    }
  },

  buscarUsuario: async (dados) => {
    try {
      const usuario = await UsuarioModel.findOne({
        nome: dados.usuario,
      });
      return usuario;
    } catch (error) {
      return error;
    }
  },
};

export default usuarioController;
