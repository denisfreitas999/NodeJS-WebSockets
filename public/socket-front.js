/* eslint-disable import/no-cycle */
import atualizaTextoEditor from './documento.js';

// eslint-disable-next-line no-undef
const socket = io();

function selecionarDocumento(nome) {
  socket.emit('selecionar_documento', nome, (texto) => {
    atualizaTextoEditor(texto);
  });
}

function emitirTextoEditor(dto) {
  socket.emit('texto_editor', dto);
}

socket.on('texto_editor_clientes', (texto) => {
  atualizaTextoEditor(texto);
});

function emitirExcluirDocumento(nomeDocumento) {
  socket.emit('excluir_documento', nomeDocumento);
}

export { emitirTextoEditor, selecionarDocumento, emitirExcluirDocumento };
