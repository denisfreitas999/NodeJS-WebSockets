import 'dotenv/config';
import io from './servidor.js';
import registrarEventosInicio from './event/inicio.js';
import registrarEventosDocumentos from './event/documentos.js';
import registrarEventosCadastro from './event/cadastro.js';
import registrarEventosLogin from './event/login.js';
import autorizarUsuario from './middlewares/autorizarUsuario.js';

io.use(autorizarUsuario);

io.on('connection', (socket) => {
  registrarEventosInicio(socket, io);
  registrarEventosDocumentos(socket, io);
  registrarEventosCadastro(socket, io);
  registrarEventosLogin(socket, io);
});
