import usuarioController from '../controller/usuarioController.js';

export default function registrarEventosLogin(socket, io) {
  socket.on('autenticar_usuario', async ({ nome, senha }) => {
    const usuario = await usuarioController.buscarUsuario(nome);

    console.log(usuario);
  });
}
