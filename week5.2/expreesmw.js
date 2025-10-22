

const express = require("express")

const bodyparser = require("body-parser")

const app = express()
// we have to use this inorder to use the  express jsomn mw

app.use(bodyParser.json())

app.post("/sum" , function(req, req){

    console.log(req.body);
    const a = parseInt(req.body.a)
    const b = parseInt(req.body.b)


    res.json({
        ans : a+b 
    })
    

    
})