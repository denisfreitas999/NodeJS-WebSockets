import jwt from 'jsonwebtoken';

export default function autorizarUsuario(socket, next) {
  const tokenJWT = socket.handshake.auth.token;
  try {
    const payloadToken = jwt.verify(tokenJWT, process.env.SECRET_JWT);
    socket.emit('autorizacao_sucesso', payloadToken);
    next();
  } catch (error) {
    next(error);
  }
}
