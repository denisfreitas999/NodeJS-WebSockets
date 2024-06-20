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

async function adicionarDocumento(nome) {
  const documento = {
    nome,
    texto: '',
  };
  const resultado = await DocumentoModel.create(documento);
  return resultado;
}

async function excluirDocumento(nomeDocumento) {
  const resultado = await DocumentoModel.findOneAndDelete({ nome: nomeDocumento });
  return resultado;
}

io.on('connection', (socket) => {
  socket.on('obter_documentos', async (devolverDocumentos) => {
    const documentos = await obterDocumentos();
    devolverDocumentos(documentos);
  });
  socket.on('adicionar_documento', async (nome) => {
    const documentoExiste = (await encontrarDocumento(nome)) !== null;

    if (documentoExiste) {
      socket.emit('documento_existente', nome);
    } else {
      try {
        const resultado = await adicionarDocumento(nome);
        console.log(`Adicionado o documento: ${resultado}`);
        if (resultado) {
          io.emit('adicionar_documento_interface', nome);
        }
      } catch (error) {
        console.error(`Erro ao adicionar documento: ${error.message}`);
      }
    }
  });
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
  socket.on('excluir_documento', async (nomeDocumento) => {
    const resultado = await excluirDocumento(nomeDocumento);
    if (resultado) {
      io.emit('excluir_documento_sucesso', nomeDocumento);
    }
  });
});
