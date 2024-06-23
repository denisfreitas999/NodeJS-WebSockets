/* eslint-disable no-undef */
const socket = io();

function emitirAutenticarUsuario(dados) {
  socket.emit('autenticar_usuario', dados);
}

socket.on('autenticacao_sucesso', () => {
  alert('Usuário autenticado com sucesso.');
  window.location.href = '/';
});
socket.on('autenticacao_erro', () => alert('Erro ao efetuar login, usuário ou senha inválidos.'));
socket.on('cadastro_inexistente', () => { alert('Essa conta não existe. Insira uma conta diferente ou faça o cadastro de uma nova conta.'); });

/* eslint-disable import/prefer-default-export */
export { emitirAutenticarUsuario };
