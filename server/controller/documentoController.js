import DocumentoModel from '../models/Documento.js';

const documentoController = {
  encontrarDocumento: async (nome) => {
    const documento = await DocumentoModel.findOne({ nome });
    return documento;
  },

  atualizaDocumento: async (dto) => {
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
  },

  obterDocumentos: async () => {
    const documentos = await DocumentoModel.find();
    return documentos;
  },

  adicionarDocumento: async (nome) => {
    const documento = {
      nome,
      texto: '',
    };
    const resultado = await DocumentoModel.create(documento);
    return resultado;
  },

  excluirDocumento: async (nomeDocumento) => {
    const resultado = await DocumentoModel.findOneAndDelete({ nome: nomeDocumento });
    return resultado;
  },

};

export default documentoController;
