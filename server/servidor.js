import express from 'express';
import url from 'url';
import path from 'path';
import http from 'http';
import { Server } from 'socket.io';
import conexao from './db/db.js';

const app = express();
const port = process.env.PORT || 3000;

const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico = path.join(caminhoAtual, '../..', 'public');
app.use(express.static(diretorioPublico));

const servidorHttp = http.createServer(app);

const io = new Server(servidorHttp);

async function main() {
  await conexao();
  servidorHttp.listen(port, () => console.log(`Escutando na porta ${port}.`));
}

main().catch((err) => console.error('Erro ao iniciar o servidor:', err));

export default io;
