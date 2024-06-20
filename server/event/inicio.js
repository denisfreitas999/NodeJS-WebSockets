import documentoController from '../controller/documentoController.js';

export default function registrarEventosInicio(socket, io) {
  socket.on('obter_documentos', async (devolverDocumentos) => {
    const documentos = await documentoController.obterDocumentos();
    devolverDocumentos(documentos);
  });
  socket.on('adicionar_documento', async (nome) => {
    const documentoExiste = (await documentoController.encontrarDocumento(nome)) !== null;

    if (documentoExiste) {
      socket.emit('documento_existente', nome);
    } else {
      try {
        const resultado = await documentoController.adicionarDocumento(nome);
        console.log(`Adicionado o documento: ${resultado}`);
        if (resultado) {
          io.emit('adicionar_documento_interface', nome);
        }
      } catch (error) {
        console.error(`Erro ao adicionar documento: ${error.message}`);
      }
    }
  });
}
