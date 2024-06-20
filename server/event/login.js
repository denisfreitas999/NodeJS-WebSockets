import usuarioController from '../controller/usuarioController.js';
import autenticarUsuario from '../utils/autenticarUsuario.js';

export default function registrarEventosLogin(socket, io) {
  socket.on('autenticar_usuario', async ({ nome, senha }) => {
    const usuario = await usuarioController.buscarUsuario(nome);
    if (!usuario) {
      socket.emit('cadastro_inexistente');
      console.log(usuario);
    } else {
      const autenticado = autenticarUsuario(senha, usuario);
      if (autenticado) {
        socket.emit('autenticacao_sucesso');
      } else {
        socket.emit('autenticacao_erro');
      }
    }
  });
}
