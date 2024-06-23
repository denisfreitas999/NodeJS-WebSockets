/* eslint-disable import/no-cycle */
/* eslint-disable no-undef */
import emitirAdicionarDocumento from './socket-index.js';
import { obterCookie, removerCookie } from './utils/cookies.js';

const tokenJWT = obterCookie('tokenJWT');

console.log(tokenJWT);

const listaDocumentos = document.getElementById('lista-documentos');
const form = document.getElementById('form-adiciona-documento');
const inputDocumento = document.getElementById('input-documento');
const botaoLogout = document.getElementById('botao-logout');

botaoLogout.addEventListener('click', () => {
  removerCookie('tokenJWT');
});

form.addEventListener('submit', (evento) => {
  evento.preventDefault();
  emitirAdicionarDocumento(inputDocumento.value);
  inputDocumento.value = '';
});

function inserirLinkDocumento(nomeDocumento) {
  listaDocumentos.innerHTML
    += `<a 
          href="/documento/documento.html?nome=${nomeDocumento}" 
          class="list-group-item list-group-item-action"
          id="documento-${nomeDocumento}"
        >
          ${nomeDocumento}
        </a>`;
}

function removerLinkDocumento(nomeDocumento) {
  const documento = document.getElementById(`documento-${nomeDocumento}`);
  listaDocumentos.removeChild(documento);
}

export { inserirLinkDocumento, removerLinkDocumento };
