/* eslint-disable no-shadow */
import documentoController from '../controller/documentoController.js';
import { adicionarConexao, obterUsuariosDocumento, removerConexao } from '../utils/conexoesDocumentos.js';

export default function registrarEventosDocumentos(socket, io) {
  socket.on('selecionar_documento', async ({ nomeDocumento, nomeUsuario }, devolverTexto) => {
    const documento = await documentoController.encontrarDocumento(nomeDocumento);
    if (documento) {
      socket.join(nomeDocumento);
      adicionarConexao({
        nomeDocumento,
        nomeUsuario,
      });

      const usuariosNoDocumento = obterUsuariosDocumento(nomeDocumento);

      io.to(nomeDocumento).emit('usuarios_no_documento', usuariosNoDocumento);

      devolverTexto(documento.texto);
    }

    socket.on('texto_editor', async ({ texto, nomeDocumento }) => {
      const atualizacao = await documentoController.atualizaDocumento({ nomeDocumento, texto });

      if (atualizacao.modifiedCount) {
        atualizacao.texto = texto;
        socket.to(nomeDocumento).emit('texto_editor_clientes', texto);
      }
    });
    /* socket.on('disconnect', (motivo) => {
      console.log(`Cliente "${socket.id}" desconectado!
      Motivo: ${motivo}`);
    }); */
    socket.on('excluir_documento', async (nomeDocumento) => {
      const resultado = await documentoController.excluirDocumento(nomeDocumento);
      if (resultado) {
        io.emit('excluir_documento_sucesso', nomeDocumento);
      }
    });

    socket.on('disconnect', (motivo) => {
      console.log(`Cliente "${socket.id}" desconectado!
      Motivo: ${motivo}`);
      removerConexao(nomeDocumento, nomeUsuario);

      const usuariosNoDocumento = obterUsuariosDocumento(nomeDocumento);

      io.to(nomeDocumento).emit('usuarios_no_documento', usuariosNoDocumento);
    });
  });
}
