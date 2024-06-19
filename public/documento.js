/* eslint-disable no-undef */
// eslint-disable-next-line import/no-cycle
import { emitirTextoEditor, selecionarDocumento } from './socket-front.js';

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get('nome');

const textoEditor = document.getElementById('editor-texto');
const tituloDocumento = document.getElementById('titulo-documento');

tituloDocumento.textContent = nomeDocumento || 'Documento sem título';

selecionarDocumento(nomeDocumento);

textoEditor.addEventListener('keyup', () => {
  emitirTextoEditor(textoEditor.value);
});

function atualizaTextoEditor(texto) {
  textoEditor.value = texto;
}

export default atualizaTextoEditor;
