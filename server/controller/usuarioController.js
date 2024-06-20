import UsuarioModel from '../models/Usuario.js';
import criaHashESalSenha from '../utils/criaHashESalSenha.js';

const usuarioController = {
  cadastrar: async (dados) => {
    console.log(dados);
    try {
      if (!dados) {
        throw new Error('Dados não foram fornecidos.');
      }

      const { hashSenha, salSenha } = criaHashESalSenha(dados.senha);

      const usuario = await UsuarioModel.create({
        nome: dados.usuario,
        hashSenha,
        salSenha,
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
