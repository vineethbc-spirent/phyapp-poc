const express = require('express')
const next = require('next')
const http = require('http');
const { Server } = require('socket.io');

const hostname = 'localhost'
const port = parseInt(process.env.PORT || '3001', 10)
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, hostname, port })
const handle = app.getRequestHandler()
  
app.prepare().then(() => {
  const expressApp = express();

  expressApp.use(express.json());

  expressApp.get("*", (req, res) => {
    return handle(req, res);
  });

  const server = http.createServer(expressApp);
  const io = new Server(server);

  io.on('connection', (socket) => {
    console.log('a user connected: ', socket.id);
    socket.on('get_overview', async () => {
      socket.intervalId = setInterval(async () => {
        const res = await fetch('http://10.14.19.16:1003/', {
            headers: {
                'Content-Type': 'application/json',
            },
            body: `[
                -1,
                "get_overview"
            ]`,
            method: "POST"
        });
        const data = await res.json();
        socket.emit('get_overview:response', data);
      }, 500);
    });
    socket.on('disconnect', () => {
      clearInterval(socket.intervalId);
      console.log('user disconnected: ', socket.id);
    });
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Socket io Ready on http://localhost:${port}`);
  });

}).catch((ex) => {
  console.error(ex.stack);
  process.exit(1);
});