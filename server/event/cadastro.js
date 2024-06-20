/* import documentoController from '../controller/documentoController.js'; */

export default function registrarEventosCadastro(socket, io) {
  socket.on('cadastrar_usuario', (dados) => {
    console.log(dados);
  });
}
