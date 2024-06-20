import usuarioController from '../controller/usuarioController.js';

export default function registrarEventosCadastro(socket, io) {
  socket.on('cadastrar_usuario', async ({ nome, senha }) => {
    const usuario = await usuarioController.buscarUsuario(nome);

    if (usuario === null) {
      const cadastrar = await usuarioController.cadastrar({ nome, senha });
      if (cadastrar) {
        socket.emit('cadastro_sucesso');
      } else {
        socket.emit('cadastro_error');
      }
    } else {
      socket.emit('usuario_ja_existente');
    }
  });
}
