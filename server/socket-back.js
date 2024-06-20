import io from './servidor.js';
import registrarEventosInicio from './event/inicio.js';
import registrarEventosDocumentos from './event/documentos.js';
import registrarEventosCadastro from './event/cadastro.js';

io.on('connection', (socket) => {
  registrarEventosInicio(socket, io);
  registrarEventosDocumentos(socket, io);
  registrarEventosCadastro(socket, io);
});
