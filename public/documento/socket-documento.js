/* eslint-disable no-undef */
/* eslint-disable import/no-cycle */
import { obterCookie } from '../utils/cookies.js';
import {
  atualizaTextoEditor,
  alertarERedirecionar,
  tratarAutorizacaoSucesso,
  atualizarInterfaceUsuarios,
} from './documento.js';

// eslint-disable-next-line no-undef
const socket = io('/usuarios', {
  auth: {
    token: obterCookie('tokenJWT'),
  },
});

socket.on('autorizacao_sucesso', tratarAutorizacaoSucesso);

socket.on('connect_error', (erro) => {
  alert(erro);
  window.location.href = '/login/index.html';
});

function selecionarDocumento(dadosEntrada) {
  socket.emit('selecionar_documento', dadosEntrada, (texto) => {
    atualizaTextoEditor(texto);
  });
}

socket.on('usuarios_no_documento', atualizarInterfaceUsuarios);

function emitirTextoEditor(dto) {
  socket.emit('texto_editor', dto);
}

socket.on('texto_editor_clientes', (texto) => {
  atualizaTextoEditor(texto);
});

function emitirExcluirDocumento(nomeDocumento) {
  socket.emit('excluir_documento', nomeDocumento);
}

socket.on('excluir_documento_sucesso', (nomeDocumento) => {
  alertarERedirecionar(nomeDocumento);
});

export { emitirTextoEditor, selecionarDocumento, emitirExcluirDocumento };
