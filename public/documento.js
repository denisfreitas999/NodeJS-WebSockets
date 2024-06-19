// eslint-disable-next-line import/no-cycle
import emitirTextoEditor from './socket-front.js';

// eslint-disable-next-line no-undef
const textoEditor = document.getElementById('editor-texto');

textoEditor.addEventListener('keyup', () => {
  emitirTextoEditor(textoEditor.value);
});

function atualizaTextoEditor(texto) {
  textoEditor.value = texto;
}

export default atualizaTextoEditor;
