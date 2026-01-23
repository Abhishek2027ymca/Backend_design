
const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const {UserModel , TodoModel}  = require("./db")
// skelatne for the epxress cod e
//!!!!!!always creste a jwt seceret key 

const JWT_SECRET = "ADE!@EX$&%FGHI(7)*HIKL";
mongoose.connect("mongodb+srv://admin:rr8prOazvrC6Tzi1@cluster0.byjr6ke.mongodb.net/todoapp");

// thes e2 endpoint will be non aitheticated 
 app.use(express.json()); // to parse json body , into js object
  
//___________________make this request handels an async function 
app.post("/signup"  ,async function(req, res){ // we use asyn funcion here
    // get the data from the body
  // parsing the body
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    // store the data in the db 
    // put await is used to wait for the promise to be resolved
    // otherwise it will move to the next line
    await UserModel.create({
        email: email,
          password: password,
        name: name,

        
    })

    res.json({
        message : "user created successfully"
    })
        

});

app.post("/signin" ,async function(req, res){
    
    const email = req.body.email;// expecting an  email in email header of req body 
    const password = req.body.password;

    // read data from db to check if the user exists
    const user =  await UserModel.findOne({ // this db call  should be with await
        email : email ,
        password :password 

    })

    if(user){// then return token 
        const token = jwt.sign({
            id :user._id.toString(), // to conevrtign userid whcij is an ojbectid , into string 
        }, JWT_SECRET);// where to put the secret key 
        res.json({
   token : token 
        })
    }



    else{
        res.status(403).json({
            message : "invalid credentials" 
        })
    }

    
});

// these end potns after the  authetication 
// _____userr creatign thjeir todos 
app.post("/todo" ,auth , function(req, res){
const userId = req.userId;

res.json({
    userid : userId
})

});
// fetching their todos 
app.get("/todos" , auth , function(req, res){

    const userId = req.userId;

res.json({
    userid : userId
})

});

// creating a middleware for authetication
function auth(req, res, next){
    const token = req.headers.token;// expecting a token in token header 

    const decodedData = jwt.verify(token , JWT_SECRET);
    if(decodedData){
        req.userId = decodedData.id ;// not userId its id , found ed by checkig the jwt value 
        next();
    }
    else{
        res.status(403).json({
            msg : " incorrect data"
        })
    }

}


app.listen(3000);

