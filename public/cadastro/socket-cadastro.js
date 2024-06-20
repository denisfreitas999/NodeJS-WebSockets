// eslint-disable-next-line no-undef
const socket = io();

function emitirCadastroUsuario(dados) {
  socket.emit('cadastrar_usuario', dados);
}

/* eslint-disable import/prefer-default-export */
export { emitirCadastroUsuario };
