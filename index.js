const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server); 

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/templates/index.html');
});


io.on('connection', function (socket) {
    console.log('Un usuario se ha conectado al chat ');

    socket.on('chat message', function (msg) {
        io.emit('chat message', msg);
    });

    socket.on('disconnect', function (){
        console.log('Un usuario se ha desconectado del chat');
    });
});

server.listen(3000, function () {
    console.log('Escuchando en port 3000');
} );