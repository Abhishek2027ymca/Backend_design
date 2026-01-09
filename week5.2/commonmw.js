
// FIRST 
// COMNLU I USED MIDDLWARE 

//  !!!!!!!!!!! express.json
const bodyParser = require("body-parser")

const express = require("express")
const app = express()
app.use(express.json()) ;// this is impt
// if i dont use this then req.body will be undefined 
app.post("/sum" , function (req, res){
 
    console.log(req.body);
    
    //  we hhave used parseitnt to convert string to number
    const a = parseInt(req.body.a)
    const b = parseInt(req.body.b)
    const ans = a + b
    res.json({
        ans: ans
    })})

    app.listen(3000, function(){
        console.log("server started at port 3000");
    })
