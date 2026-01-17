
const express = require(express)
const app = express();
const {UserModel , TodoModel}  = require("./db")
// skelatne for the epxress cod e

// thes e2 endpoint will be non aitheticated 

app.post("/signup"  , function(req, res){
       
    user.insert({
        name: "harkirat" ,
        password: "124dd",
        email: " dcse@.com"
    })
        

});

app.post("/signin" ,function(req, res){
    
});

// these end potns after the  authetication 
app.post("/todo" ,function(req, res){

});
app.get("/todo" ,function(req, res){

});


app.listen(3000);

