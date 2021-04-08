const socket = io('ws://localhost:8080');

socket.on('message', (text) => {
  const node = document.createElement('li');
  node.innerHTML = text;
  document.querySelector('ul').appendChild(node);
});

document.querySelector('button').onclick = () => {
  const text = document.querySelector('input').value;
  socket.emit('message', text);
};
