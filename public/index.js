/* eslint-disable import/no-cycle */
/* eslint-disable no-undef */
import emitirAdicionarDocumento from './socket-index.js';

const listaDocumentos = document.getElementById('lista-documentos');
const form = document.getElementById('form-adiciona-documento');
const inputDocumento = document.getElementById('input-documento');

form.addEventListener('submit', (evento) => {
  evento.preventDefault();
  emitirAdicionarDocumento(inputDocumento.value);
  inputDocumento.value = '';
});

function inserirLinkDocumento(nomeDocumento) {
  listaDocumentos.innerHTML
    += `<a href="documento.html?nome=${nomeDocumento}" class="list-group-item list-group-item-action">
          ${nomeDocumento}
        </a>`;
}

export default inserirLinkDocumento;
