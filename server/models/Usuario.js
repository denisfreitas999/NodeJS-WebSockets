import mongoose from 'mongoose';

// Definir o esquema para a coleção 'usuarios'
const usuarioSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  hashSenha: {
    type: String,
    required: true,
  },
  salSenha: {
    type: String,
    required: true,
  },
});

// Criar o modelo para a coleção 'usuarios'
const UsuarioModel = mongoose.model('Usuario', usuarioSchema);

export default UsuarioModel;
