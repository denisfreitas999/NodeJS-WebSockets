// eslint-disable-next-line no-unused-vars, no-undef
const socket = io();

// eslint-disable-next-line no-undef
const textoEditor = document.getElementById('editor-texto');

textoEditor.addEventListener('keyup', () => {
  socket.emit('texto_editor', textoEditor.value);
});

socket.on('texto_editor_clientes', (texto) => {
  textoEditor.value = texto;
});
