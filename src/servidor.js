import express from 'express';
import url from 'url';
import path from 'path';
import http from 'http';
import { Server } from 'socket.io';
import conexao from './db/db.js';

const app = express();
const port = process.env.port || 3000;
conexao();

const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico = path.join(caminhoAtual, '../..', 'public');
app.use(express.static(diretorioPublico));

const servidorHttp = http.createServer(app);

servidorHttp.listen(port, () => console.log(`Escutando na porta ${port}.`));

const io = new Server(servidorHttp);

export default io;
