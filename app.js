const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected: ' + socket.id); // mỗi một kết nối socket sẽ tạo ra 1 tài khoản là socket
    socket.on('disconnect', () => { // để nhận biết 1 kết nối bị ngắt sủ dụng socket.on() với tham số đầu tiên là chuỗi 'disconnect
        console.log('a user disconnect: ' + socket.id);
    })
});

server.listen(1000, () => {
    console.log('listening on *:1000');
});