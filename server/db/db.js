import mongoose from 'mongoose';

// URL de conexão com o MongoDB
const dbURI = 'mongodb://localhost:27017/websocket-node';

// Conectar ao MongoDB
async function conexao() {
  try {
    await mongoose.connect(dbURI);
    console.log('Conectado ao banco.');
  } catch (err) {
    console.error('Erro ao conectar ao banco.', err);
  }
}

// Exportar a conexão
export default conexao;
