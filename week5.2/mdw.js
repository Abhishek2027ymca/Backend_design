
const express = require("express")

const app = express()

let requestcount = 0 ;
 
function requestInc(req, res ,next){
    requestcount = requestcount +1 
    console.log(" total number of request = " + requestcount);
     // calling the next function which is the function of get endpoint 

     // euther reosond  kardo or 
     // next fn ko call kardo 
     // donot hung 
     next()

}

// final function given by tghe endpoitn get 

function realsumhandler(req, res){
     const a = parseInt(req.query.a)
     const b = parseInt(req.query.b)
const ans = a+b


     res.send(  "ans is " + ans )
}


app.get("/sum" ,requestInc, realsumhandler )

app.listen(3000)