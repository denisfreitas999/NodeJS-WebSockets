import jwt from 'jsonwebtoken';

export default function gerarJWT(payload) {
  const tokenjwt = jwt.sign(payload, process.env.SECRET_JWT, {
    expiresIn: '1h',
  });
  return tokenjwt;
}
