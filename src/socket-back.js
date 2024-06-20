import io from './servidor.js';
import DocumentoModel from './models/Documento.js';

async function encontrarDocumento(nome) {
  const documento = await DocumentoModel.findOne({ nome });
  return documento;
}

async function atualizaDocumento(dto) {
  const atualizacao = await DocumentoModel.updateOne(
    {
      nome: dto.nomeDocumento,
    },
    {
      $set: {
        texto: dto.texto,
      },
    },
  );

  return atualizacao;
}

async function obterDocumentos() {
  const documentos = await DocumentoModel.find();
  return documentos;
}

io.on('connection', (socket) => {
  socket.on('obter_documentos', async (devolverDocumentos) => {
    const documentos = await obterDocumentos();
    devolverDocumentos(documentos);
  });
  console.log('Um cliente se conectou!', socket.id);
  socket.on('selecionar_documento', async (nomeDocumento, devolverTexto) => {
    socket.join(nomeDocumento);
    const documento = await encontrarDocumento(nomeDocumento);
    if (documento) {
      devolverTexto(documento.texto);
    }
  });
  socket.on('texto_editor', async ({ texto, nomeDocumento }) => {
    const atualizacao = await atualizaDocumento({ nomeDocumento, texto });

    if (atualizacao.modifiedCount) {
      atualizacao.texto = texto;
      socket.to(nomeDocumento).emit('texto_editor_clientes', texto);
    }
  });
  socket.on('disconnect', (motivo) => {
    console.log(`Cliente "${socket.id}" desconectado!
    Motivo: ${motivo}`);
  });
});
