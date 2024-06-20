// eslint-disable-next-line import/no-cycle
import inserirLinkDocumento from './index.js';

/* eslint-disable no-undef */
const socket = io();
socket.emit('obter_documentos', (documentos) => {
  documentos.forEach((documento) => {
    inserirLinkDocumento(documento.nome);
  });
});
