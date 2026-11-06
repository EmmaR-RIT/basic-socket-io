const http = require('http');
const { Server } = require('socket.io');

let io;


const handleChatMessage = (msg) => {
    io.emit('sendChat', msg);
}


const SocketSetup = (app) => {
    const server = http.createServer(app);
    io = new Server(server);

    io.on('connection', (socket) => {
        console.log(`User ${socket.id} connected.`)
        socket.on('disconnect', () => {
            console.log(`User ${socket.id} disconnected`);
        })

        socket.on('chatMessage', handleChatMessage)
    });

    return server;
}

module.exports = SocketSetup;
