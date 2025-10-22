
// create a B>E ser in node  that return  the sum end point
// write an html file , that hit the baxkend server  ub=sing the fetch api


const express = require("express")
// always make instance 
const app = express()
//  here i  will use apress.jsonmw 
// because we are sending json data from the client to the server
// so we have to use this middleware to parse the json data
// into javascript object
app.use(express.json())


app.post("/sum",  function( req, res){


const n = parseInt(req.query.n)
const m = parseInt(req.query.m)

res.json({
    ans : n+m
})





})


app.listen(3000)