import jwt from 'jsonwebtoken';

export default function autorizarUsuario(socket, next) {
  const tokenJWT = socket.handshake.auth.token;
  try {
    jwt.verify(tokenJWT, process.env.SECRET_JWT);
    next();
  } catch (error) {
    next(error);
  }
}
