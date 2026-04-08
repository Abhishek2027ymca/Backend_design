// // what libray is used 
// // ther ar many wbsocket library 
// //npm i ws @types/ws is the librayay 
// import { WebSocketServer} from 'ws' ;
// //!!!  this is a  server side code
// const wss  = new WebSocketServer({port :8080})
// // event handler , simple a connection
// // scoket is liuke bot req, and response object in http 
// wss.on("connection" , function(socket){
// // now thhis socket is the connection between client and server
// console.log("a new client connected")
// // wheb=nver is connection is made i will reach here 
// setInterval(() => {
//     socket.send("hello")    
// }, 400);
// // now when this socket send me the message i will reach here
// // whenver they send a messge , i will ghet here 
// socket.on("message" , (e)=> {
//     console.log("message from client " + e.toString())
// })
// }
// )
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
//# sourceMappingURL=i.js.map