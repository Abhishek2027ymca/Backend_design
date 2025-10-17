//  creating an http server 

// comnmmand to install packaage \.jsomn


const express = require("express")

const app = express()
// always make a requiest 


// whenver we get into /  , we   will get acces to the insoide funtion of get 

app.get("/" , (req, res) => {
    res.send("Hello World")
})  


app.listen (3000)