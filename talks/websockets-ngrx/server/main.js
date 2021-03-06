const {server} = require('websocket');
const {createServer} = require('http');
const loremIpsum = require('lorem-ipsum')

const httpServer = createServer();
httpServer.listen(8080);

const socketServer = new server({httpServer});
socketServer.on('request', request => {
  const connection = request.accept(null, request.origin);

  if (connection.connected) {
    const sendMessage = () => {
      const message = loremIpsum({count: 1, units: 'sentences'});
      connection.sendUTF(message);
      console.log(`Sent: "${message}"`);

      setTimeout(sendMessage, Math.random() * 10000);
    }

    sendMessage();
  }

  connection.on('message', message => {
    console.log(`Received: "${message.utf8Data}"`);
  });
});
