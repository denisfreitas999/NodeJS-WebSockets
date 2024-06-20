import usuarioController from '../controller/usuarioController.js';

export default function registrarEventosCadastro(socket, io) {
  socket.on('cadastrar_usuario', async (dados) => {
    const usuario = await usuarioController.buscarUsuario(dados);

    if (usuario === null) {
      const cadastrar = await usuarioController.cadastrar(dados);
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
