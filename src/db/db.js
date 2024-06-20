import mongoose from 'mongoose';

// URL de conexão com o MongoDB
const dbURI = 'mongodb://localhost:27017/websocket-node';

// Conectar ao MongoDB
function conexao() {
  mongoose.connect(dbURI)
    .then(() => {
      console.log('Conectado ao banco.');
    })
    .catch((err) => {
      console.error('Erro ao conectar ao banco.', err);
    });
}
// Exportar a conexão para uso em outros arquivos
export default conexao;
