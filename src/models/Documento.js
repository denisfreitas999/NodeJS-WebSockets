import mongoose from 'mongoose';

// Definir o esquema para a coleção 'documentos'
const documentoSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  nome: { type: String, required: true },
  texto: { type: String, required: true },
});

// Criar o modelo para a coleção 'documentos'
const DocumentoModel = mongoose.model('Documento', documentoSchema);

export default DocumentoModel;
