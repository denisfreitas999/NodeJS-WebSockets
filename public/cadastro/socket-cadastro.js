/* eslint-disable no-undef */
const socket = io();

function emitirCadastroUsuario(dados) {
  socket.emit('cadastrar_usuario', dados);
}

socket.on('cadastro_sucesso', () => { alert('Cadastro realizado com sucesso!'); });
socket.on('cadastro_erro', () => { alert('Erro no cadastro.'); });
socket.on('usuario_ja_existente', () => { alert('Usuário já existe!'); });

/* eslint-disable import/prefer-default-export */
export { emitirCadastroUsuario };
