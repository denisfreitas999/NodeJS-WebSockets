/* eslint-disable no-undef */
const socket = io();

function emitirAutenticarUsuario(dados) {
  socket.emit('autenticar_usuario', dados);
}

/* eslint-disable import/prefer-default-export */
export { emitirAutenticarUsuario };
