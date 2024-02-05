import { Server as HTTPServer, ServerResponse} from 'http';
import { Server as SocketIOServer, Socket} from 'Socket.IO';

type SocketResponse = ServerResponse & {
    socket: {
        server: HTTPServer & {
            io: any;
        }
    }
};

type CustomSocket = Socket & {
    socketId?: any;
};

const boost_app_url = 'http://10.104.115.231:1003/'; //'http://10.14.19.16:1003/'

const SocketHandler = (req:Request, res:SocketResponse) => {
  if (res.socket.server.io) {
    console.log('Socket is already running')
  } else {
    console.log('Socket is initializing')
    const io = new SocketIOServer(res.socket.server);
    io.on('connection', (socket: CustomSocket) => {
        console.log('a user connected: ', socket.id);
        socket.on('get_overview', async () => {
          socket.socketId = setInterval(async () => {
            const res = await fetch(boost_app_url, {
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
          clearInterval(socket.socketId);
          console.log('user disconnected: ', socket.id);
        });
      });
    res.socket.server.io = io;
  }
  res.end()
}

export default SocketHandler