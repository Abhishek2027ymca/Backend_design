// ping pont server 
// mnluy wheen there  is one breowser na done server 
import { WebSocketServer, WebSocket } from 'ws';
const wss = new WebSocketServer({ port: 8080 });
wss.on("connection", function (socket) {
    console.log("a new client connected");
    socket.on("message", (e) => {
        console.log("message from client " + e.toString());
        console.log(e.toString() === "ping");
        if (e.toString() === "ping") {
            socket.send("pong");
        }
    });
});
//# sourceMappingURL=ping-pong.js.map