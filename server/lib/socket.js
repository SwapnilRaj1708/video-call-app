const io = require('socket.io');
const users = require('./users');

/**
 * Initialize when a connection is made
 * @param {SocketIO.Socket} socket
 */
function initSocket(socket) {
  let id;
  socket
    .on('init', async ({ customId } = {}) => {
      id = await users.create(socket, customId);
      if (id) {
        socket.emit('init', { id });
      } else {
        socket.emit('error', { message: 'Failed to generating user id' });
      }
    })
    .on('request', (data) => {
      const receiver = users.get(data.to);
      if (receiver) {
        receiver.emit('request', { from: id });
      }
    })
    .on('call', (data) => {
      const receiver = users.get(data.to);
      if (receiver) {
        receiver.emit('call', { ...data, from: id });
      } else {
        socket.emit('failed');
      }
    })
    .on('end', (data) => {
      const receiver = users.get(data.to);
      if (receiver) {
        receiver.emit('end');
      }
    })
    .on('disconnect', () => {
      users.remove(id);
      console.log(id, 'disconnected');
    });
}

module.exports = (server) => {
  const allowedOrigins = [
    'https://0c71d7089982.ngrok-free.app',
    'http://localhost:9000',
    'http://localhost:5000'
  ];

  io({
    path: '/bridge',
    serveClient: false,
    cors: {
      origin: allowedOrigins,
      methods: ['GET', 'POST'],
      credentials: true
    }
  })
    .listen(server, { log: true })
    .on('connection', initSocket);
};
