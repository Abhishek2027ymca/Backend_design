// this is a user route 
// make a function and export it 


// const express = require("expres");
// const Router = express.Router ; // important 
//________ or________
const { Router } = require("express")
const {UserModel} = require("../db") // any errorher
const useRouter = Router(); // router is a function 

// why dont we use body parser here a;so 
// because we have already used it in the main file i.js 
const  jwt = require("jsonwebtoken");
// now istead  of this .... app.post("/user/signup" , async function(req, res)
// use  .. ___________________useRouter.post

useRouter.post("/signup", async function (req, res) {
    // const email = req.body.email;
    // const name = req.body.name;

const {email, password , firstname , lastname } = req.body;


await UserModel.create({
    email : email,
    password : password,
    firstname : firstname,
    lastname : lastname 
})

 res.json({
        message: "signup succed"
    })

})



useRouter.post("/signin", async function (req, res) {
    const {email , password } = req.body;
// will chekc  if the current user exist or not just by looking at eh email a dand password 
const user = await UserModel.findOne({
    email : email ,
    password : password 
})// user will be an array of object

if(user){
    // create a token 
    const token = jwt.sign({
        id : user._id // this is the object id from the db 
    }, secretkey)

     res.json({
        message: "signin success",
        token : token
    })
}
else{
    res.status(401).json({
        message : "invalid credentials"
    })
}
   
})

useRouter.get("/purchases", async function (req, res) {
    res.json({
        message: " these are your purchase "
    })
})




module.exports = {
    useRouter: useRouter
}