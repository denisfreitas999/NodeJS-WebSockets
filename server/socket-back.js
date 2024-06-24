import 'dotenv/config';
import io from './servidor.js';
import registrarEventosInicio from './event/inicio.js';
import registrarEventosDocumentos from './event/documentos.js';
import registrarEventosCadastro from './event/cadastro.js';
import registrarEventosLogin from './event/login.js';
import autorizarUsuario from './middlewares/autorizarUsuario.js';

const nspUsuarios = io.of('/usuarios');

nspUsuarios.use(autorizarUsuario);

nspUsuarios.on('connection', (socket) => {
  registrarEventosInicio(socket, nspUsuarios);
  registrarEventosDocumentos(socket, nspUsuarios);
});

io.of('/').on('connection', (socket) => {
  registrarEventosCadastro(socket, io);
  registrarEventosLogin(socket, io);
});
