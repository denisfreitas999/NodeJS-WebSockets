import UsuarioModel from '../models/Usuario.js';
import criaHashESalSenha from '../utils/criaHashESalSenha.js';

const usuarioController = {
  cadastrar: async (dados) => {
    const { nome, senha } = dados;
    try {
      if (!nome || !senha) {
        throw new Error('Dados não foram fornecidos.');
      }

      const { hashSenha, salSenha } = criaHashESalSenha(senha);

      const usuario = await UsuarioModel.create({
        nome,
        hashSenha,
        salSenha,
      });

      return usuario;
    } catch (error) {
      return error;
    }
  },

  buscarUsuario: async (nome) => {
    try {
      const usuario = await UsuarioModel.findOne({
        nome,
      });
      return usuario;
    } catch (error) {
      return error;
    }
  },
};

export default usuarioController;
