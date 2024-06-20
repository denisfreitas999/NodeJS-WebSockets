/* eslint-disable no-undef */
// eslint-disable-next-line import/no-cycle
import { emitirTextoEditor, selecionarDocumento, emitirExcluirDocumento } from './socket-documento.js';

const parametros = new URLSearchParams(window.location.search);

const nomeDocumento = parametros.get('nome');

const textoEditor = document.getElementById('editor-texto');
const tituloDocumento = document.getElementById('titulo-documento');
const botaoExcluir = document.getElementById('excluir-documento');

tituloDocumento.textContent = nomeDocumento || 'Documento sem título';

selecionarDocumento(nomeDocumento);

textoEditor.addEventListener('keyup', () => {
  emitirTextoEditor(
    {
      texto: textoEditor.value,
      nomeDocumento,
    },
  );
});

function atualizaTextoEditor(texto) {
  textoEditor.value = texto;
}

botaoExcluir.addEventListener('click', () => {
  console.log('passei');
  emitirExcluirDocumento(nomeDocumento);
});

function alertarERedirecionar(nome) {
  if (nome === nomeDocumento) {
    alert(`Documento ${nome} excluido.`);
    window.location.href = '/';
  }
}

export { atualizaTextoEditor, alertarERedirecionar };
