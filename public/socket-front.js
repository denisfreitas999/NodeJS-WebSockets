import atualizaTextoEditor from './documento.js';

// eslint-disable-next-line no-undef
const socket = io();

function emitirTextoEditor(texto) {
  socket.emit('texto_editor', texto);
}

socket.on('texto_editor_clientes', (texto) => {
  atualizaTextoEditor(texto);
});

export default emitirTextoEditor;
