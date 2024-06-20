import io from './servidor.js';
import registrarEventosInicio from './event/registrarEventosInicio.js';
import registrarEventosDocumentos from './event/registrarEventosDocumentos.js';

io.on('connection', (socket) => {
  registrarEventosInicio(socket, io);
  registrarEventosDocumentos(socket, io);
});
