
const express = require("express")
const cors = require("cors");
const app = express()

app.use( cors() ) ;
// all f.e  will use this cors mw
// as we havnt se the domainnam e
let requestcount = 0 ;
 
function requestInc(req, res ,next){
    requestcount = requestcount +1 
    console.log(" total number of request = " + requestcount);
     // calling the next function which is the function of get endpoint 

     // euther reosond  kardo or 
     // next fn ko call kardo 
     // donot hung 
     next()
     // WHT  DOES NEXT DO 
     // IT PASSES THE CONTROL TO THE NEXT MIDDLEWARE OR THE FINAL HANDLER
     // WAHT IS ITS FNC IN THIS COD E
     //

}

// final function given by tghe endpoitn get 

function realsumhandler(req, res){
     // we willpas  a and b in the body with the help of  postman
     /// not usinf query parm  directly 

     const a = parseInt(req.query.a)
     const b = parseInt(req.query.b)
     const ans = a+b


     res.send(  "ans is " + ans )
}


app.get("/sum" ,requestInc, realsumhandler )

app.listen(3000)


// This is a middleware because:

// It has (req, res, next)

// It runs before the actual route handler

// next() passes control to the next function

// ⚠️ VERY IMPORTANT RULE:

// A middleware must either send a response OR call next()
// Otherwise request will hang ❌