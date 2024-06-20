import mongoose from 'mongoose';

// Definir o esquema para a coleção 'documentos'
const documentoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  texto: {
    type: String,
    default: '',
  },
});

// Criar o modelo para a coleção 'documentos'
const DocumentoModel = mongoose.model('Documento', documentoSchema);

export default DocumentoModel;
