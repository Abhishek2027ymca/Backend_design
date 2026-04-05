
// what libray is used 
// ther ar many wbsocket library 
//npm i ws @types/ws is the librayay 
import { WebSocketServer} from 'ws' ;


const wss  = new WebSocketServer({port :8080})

// event handler , simple a connection

// scoket is liuke bot req, and response object in http 
wss.on("connection" , function(socket){
// now thhis socket is the connection between client and server
console.log("a new client connected")
// wheb=nver is connection is made i will reach here 
setInterval(() => {
    socket.send("hello")    
}, 400);
socket.send("hello") 


}
)


