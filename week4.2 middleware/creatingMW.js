

const express = require("express")

const app  = express();

app.get("/ride1" , function(req , res){
    res.json({
        msg :" you have a message here "
    })
})

app.listen(3000)