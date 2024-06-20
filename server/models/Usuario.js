import mongoose from 'mongoose';

// Definir o esquema para a coleção 'usuarios'
const usuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
});

// Criar o modelo para a coleção 'usuarios'
const UsuarioModel = mongoose.model('Usuario', usuarioSchema);

export default UsuarioModel;
