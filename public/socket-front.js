import atualizaTextoEditor from './documento.js';

// eslint-disable-next-line no-undef
const socket = io();

function selecionarDocumento(nome) {
  socket.emit('selecionar_documento', nome);
}

function emitirTextoEditor(dto) {
  socket.emit('texto_editor', dto);
}

socket.on('texto_editor_clientes', (texto) => {
  atualizaTextoEditor(texto);
});

export { emitirTextoEditor, selecionarDocumento };
